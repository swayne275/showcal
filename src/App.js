import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { getMatchingShows } from './api';
import Header from './components/Header/Header';
import ShowList from './components/ShowList';
import ShowSearch from './components/ShowSearch/ShowSearch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: []
    };

    this.send = this.send.bind(this)
  };

  send(event) {
    if (event.keyCode === 13) {
      const query = event.target.value;
      event.target.value = "";

      getMatchingShows(query)
      .then(formattedShows => {
        this.setState({
          shows: formattedShows
        });
      })
      .catch(emptyShowList => {
        console.log("Error getting matching shows for:", query)

        this.setState({
          shows: emptyShowList
        });
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to showCal!</h1>
        </header>
        <ShowSearch send={this.send} />
        <ShowList shows={this.state.shows} />
      </div>
    );
  }
}

export default App;

/*
TODO need to get results of search bar and feed into the
axios request
*/
