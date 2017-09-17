import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Images from './Images.jsx';

import '../css/sell.css';

class Sell extends Component {

  render() {
    return (
      <div>
      	<Images/>
      </div>
    );
  }
}

export default Sell;