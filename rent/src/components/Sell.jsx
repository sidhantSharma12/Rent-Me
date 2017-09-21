import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Images from './Images.jsx';

import '../css/sell.css';

import Header from './Header.jsx';
import Search from './Search.jsx';

import '../css/header.css';
import '../css/search.css';

class Sell extends Component {

  constructor(){
  	super();
  	this.state = {
  		hasUploadedPhoto: false
  	}
  }
  hasUploadedPhoto(bool) {
    this.setState({
      hasUploadedPhoto: bool
    })
  }		

  handleClick(){
  	window.location='/';
  }

  render() {
    return (
      <div>
      <Header/>
      <Search/>
      <div> Upload Picture </div>
      <Images hasUploadedphoto={this.hasUploadedPhoto.bind(this)} parentState={this.state}/>
      {(() => { 
      	if(this.state.hasUploadedPhoto){
      		return <button onClick={this.handleClick}> Complete </button>
      	}
      	else {
      		return <div> Have not Uploaded Photo </div>
      	}
      	
       })()}
      
      </div>
    );
  }
}

export default Sell;