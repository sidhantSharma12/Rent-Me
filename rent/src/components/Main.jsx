import React, { Component } from 'react';
import App from './App.jsx';
import Test from './Test.jsx';
import Header from './Header.jsx';
import Search from './Search.jsx';
import MostWatchlist from './MostWatchlist.jsx';
import Images from './Images.jsx';
import { Switch, Route, Link } from 'react-router-dom';

class Main extends Component {

  render() {
    return (
    	<div>
    	<input type="file"/>
		    <Header/>
		    <Search/>
		    <MostWatchlist/>
		    <Images/>
		    <Switch>
			    <Route exact path='/' component={App}/>
			    <Route path='/hello' component={Test}/>
		    </Switch>
        </div>
    );
  }
}

export default Main;