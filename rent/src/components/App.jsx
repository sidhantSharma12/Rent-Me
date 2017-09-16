import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header.jsx';
import Search from './Search.jsx';
import MostWatchlist from './MostWatchlist.jsx';
import Images from './Images.jsx';

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
        <Images/>
        <h1>Bike Numbers</h1>
        {this.state.users.map(user =>
          <div>{user.mountainBike}</div>
        )}
      </div>
    );
  }
}

export default App;