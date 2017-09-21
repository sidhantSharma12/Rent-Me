import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import '../css/header.css';

class Header extends Component {

  logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  render() {

    let logBtn = null;
    if (localStorage.getItem("username")) { //if user is logged in
      logBtn = <Link to="/" className="login" onClick={this.logout}> Log out</Link>; 
    } else {
      logBtn = <Link to="/login" className="login"> Log in</Link>;
    } 

    return (
      <div className="header-container">
      	 <Link to='/' className='home'> Rent<span style={{color:'rgb(249,175,44)'}}>Me </span> </Link> 
         {(() => { 
            if(localStorage.getItem("username")){
              return ([
                  <Link to="/sell" className="sell"> Sell</Link>,
                  <Link to='/myrent' className="my-rent"> My Rent Me</Link>
                ]);
            }
            else{
              return <Link to="/signup" className="sign-up"> Sign up</Link>
            }

         })()}
  	     
	       {logBtn}
      </div>
    );
  }
}

export default Header;