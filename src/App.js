import React, { Component } from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';

import ShowList from "./components/ShowList";
import AutocompleteSearch from "./components/AutocompleteSearch";

class App extends Component {

  // default State object
  state = {
    shows: []
  };

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

        const newState = Object.assign({}, this.state, {
          shows: formattedShows
        });

        this.setState(newState);
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to showCal!</h1>
        </header>

        <AutocompleteSearch
          options={[
            'The 100',
            'American Dad',
            'Friends'
          ]}
        />
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
