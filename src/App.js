import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import { getMatchingShows } from './api';
import Header from './components/Header/Header';
import ShowList from './components/ShowList';
import ShowSearch from './components/ShowSearch/ShowSearch';

const KEY_ENTER = 13

class EpisodeDetails extends Component {
  render() {
    // match is the url i'm on, from react router
    const {match} = this.props;
    const {episodeID} = match.params
    return (
      <div>
        {episodeID}
      </div>
    )
  }
}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: []
    };
  };

  send = (event) => {
    if (event.keyCode === KEY_ENTER) {
      const query = event.target.value;

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

  renderHomepage = () => {
    return (
      <div>
        <ShowSearch send={this.send} />
        <ShowList shows={this.state.shows} />
      </div>
    )
  }

  renderTest = () => {
    return (
      <div>
        <p>"testing"</p>
      </div>
    )
  }

  render() {
    // TODO remove comment: :episodeID in route means i want episodeID as a parameter
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to showCal!</h1>
        </header>
        <Router>
          <Route
            path="/"
            exact component={this.renderHomepage}
          />
          <Route
            path="/test"
            exact component={this.renderTest}
          />
          <Route
            path="/show/:showID"
            exact component={EpisodeDetails}
          />
        </Router>
      </div>
    );
  }
}

export default App;

/*
TODO need to get results of search bar and feed into the
axios request
*/
