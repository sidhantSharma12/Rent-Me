import React, { Component } from 'react';
import '../css/login.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
                  username: '',
                  password:'',
                  error: false
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
        if(res.result){
            localStorage.setItem('username', this.state.username);
            localStorage.setItem('password', this.state.password);
            window.location='/';
        }
        else{
          this.setState({error: true})
        }
    });;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div> Username</div>
          <input type="text" value={this.state.username} onChange={this.handleChangeUsername.bind(this)} />
          <br/>
          <div> Password </div>
          <input type="text" value={this.state.password} onChange={this.handleChangePassword.bind(this)} />
          <br/>
          <input type="submit" value="Submit" />
        </form>
        {(() => { 
          if(this.state.error){
            return <div> You typed an incorrect username or password </div>
          }
        })()}
      </div>

    );
  }
}

export default Login;