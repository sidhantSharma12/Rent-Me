import React, { Component } from 'react';
import '../App.css';

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
        <h1>Bike Numbers</h1>
        {this.state.users.map(user =>
          <div>{user.mountainBike}</div>
        )}
      </div>
    );

}

export default App;