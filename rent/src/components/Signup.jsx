import React, { Component } from 'react';
import '../css/signup.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Name: {this.state.value}
          <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;