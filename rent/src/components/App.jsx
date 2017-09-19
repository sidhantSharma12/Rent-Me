import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header.jsx';
import Search from './Search.jsx';
import MostWatchlist from './MostWatchlist.jsx';
import Images from './Images.jsx';
import Listings from './Listings.jsx';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/thelist')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Search/>
        <MostWatchlist/>
        <Listings/>
      </div>
    );
  }
}

export default App;