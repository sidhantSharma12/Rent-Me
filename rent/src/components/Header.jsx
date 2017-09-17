import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import '../css/header.css';

class Header extends Component {

  render() {
    return (
      <div className="header-container">
      	 <Link to='/' className='home'> Rent<span style={{color:'rgb(249,175,44)'}}>Me </span> </Link> 
	     <button className="browse"> Browse</button>
	     <Link to="/sell" className="sell"> Sell</Link>
	     <button className="my-rent"> My Rent Me</button>
	     <Link to="/signup" className="sign-up"> Sign up</Link>
	     <Link to="/login" className="login"> Log in</Link>
      </div>
    );
  }
}

export default Header;