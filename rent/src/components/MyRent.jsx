import React, { Component } from 'react';
import '../css/myrent.css';

class MyRent extends Component {

  componentWillMount() {
    fetch('/mylistings', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      username: localStorage.getItem("username"),
      password: localStorage.getItem("password")
      })
    }).then((res) => {
        console.log(res);
    });
  }

  render() {
    return (
      <div className="my-rent">
       My Rent
      </div>
    );
  }
}

export default MyRent;