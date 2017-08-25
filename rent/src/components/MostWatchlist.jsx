import React, { Component } from 'react';
import App from './App.jsx';
import Test from './Test.jsx';
import Header from './Header.jsx';
import Search from './Search.jsx';
import { Switch, Route, Link } from 'react-router-dom';

import '../css/mostWatchlist.css';

class MostWatchlist extends Component {

  render() {
    return (
    	<div className="most-watchlist-container">
		   <div className="title"> Most watchlisted items </div>
        </div>
    );
  }
}

export default MostWatchlist;