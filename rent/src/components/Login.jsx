import React, { Component } from 'react';
import '../css/login.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
                  username: '',
                  password:''
                 };
  }

  handleChangeUsername(event) {
    this.setState({username: event.target.value});
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch('/login', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      username: this.state.username,
      password: this.state.password
      })
    }).then(res => res.json())
      .then((res) => {
        console.log(res);
    });;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div> Username</div>
        <input type="text" value={this.state.username} onChange={this.handleChangeUsername.bind(this)} />
        <br/>
        <div> Password </div>
        <input type="text" value={this.state.password} onChange={this.handleChangePassword.bind(this)} />
        <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Login;