import React, { Component } from 'react';
import App from './App.jsx';
import Test from './Test.jsx';
import Header from './Header.jsx'
import { Switch, Route, Link } from 'react-router-dom'

class Main extends Component {

  render() {
    return (
    	<div>
		    <Header/>
		    <Switch>
			    <Route exact path='/' component={App}/>
			    <Route path='/hello' component={Test}/>
		    </Switch>
        </div>
    );
  }
}

export default Main;