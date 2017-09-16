import React, { Component } from 'react';
import App from './App.jsx';
import Test from './Test.jsx';
import Signup from './Signup.jsx';
import { Switch, Route} from 'react-router-dom';

class Main extends Component {

  render() {
    return (
		    <Switch>
			    <Route exact path='/' component={App}/>
			    <Route path='/hello' component={Test}/>
			     <Route path='/signup' component={Signup}/>
		    </Switch>
    );
  }
}

export default Main;