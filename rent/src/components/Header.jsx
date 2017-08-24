import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import '../css/header.css';

class Header extends Component {

  render() {
    return (
      <div className="header-container">
      	 <Link to='/' className='home'> Rent<span style={{color:'rgb(249,175,44)'}}>Me </span> </Link> 
	     <button className="browse"> Browse</button>
	     <button className="sell"> Sell</button>
	     <button className="my-rent"> My Rent Me</button>
	     <div className="sign-up"> Sign up</div>
	     <div className="login"> Log in</div>
      </div>
    );
  }
}

export default Header;