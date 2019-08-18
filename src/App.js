import React, { Component } from 'react';
import axios from "axios";
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
  }

  componentDidMount() {
    axios
      .get('http://localhost:8080/api/v1/showsearch',
      {
        params: {
          query: 'The 100'
        }
      })
      .then(response => {
        const data = response.data;
        const formattedShows = [];

        if (data.shows) {
          // todo check if can check size/type (is array)
          const shows = data.shows;
          Object.keys(shows).forEach(function(key) {
            let show = shows[key];
            if (show.name && show.id && show.runtime && show.status) {
              formattedShows.push({
                name: show.name,
                runtime: show.runtime,
                running: show.status,
                id: show.id,
              });
            }
          });
        }

        this.setState({
          shows: formattedShows
        })

        console.log(data)
      })
      .catch(error => {
        console.log('Network request failed');
        console.log(error);
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  componentDidUpdate() {
    console.log("Component did update")
  }

  send(event) {
    if (event.keyCode === 13) {
      // Send the search if user hits enter
      console.log(event.target.value);

      getMatchingShows(event.target.value)
      .then(formattedShows => {
        this.setState({
          shows: formattedShows
        });
      })
      .catch(emptyShowList => {
        console.log("Error getting matching shows")

        this.setState({
          shows: emptyShowList
        });
      })

      event.target.value = "";
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
