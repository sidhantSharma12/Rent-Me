import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import photo from '../search.svg'

import '../css/search.css';

class Search extends Component {

  render() {
    return (
      <div className="search-container">
      <input placeholder="Search" className='search'/>
      <button className="search-button"> <img className='search-photo' src={photo}/></button>
      <Link to='/' className='favourite'> Favourite </Link>
      <Link to='/' className='watchlist'> Watchlist </Link> 
      </div>
    );
  }
}

export default Search;