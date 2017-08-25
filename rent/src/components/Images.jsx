import React, { Component } from 'react';
import App from './App.jsx';
import Test from './Test.jsx';
import Header from './Header.jsx';
import Search from './Search.jsx';
import { Switch, Route, Link } from 'react-router-dom';
import Dropzone from 'react-dropzone';

import '../css/Images.css';

class MostWatchlist extends Component {
  
  uploadFile(files){
  	console.log('uploadFile: ');

  	const image=files[0];
  	const cloudName= 'dp6f30mzf';
  	const url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/images/upload';

  	const timestamp = Date.now()/1000;
  	const uploadPreset = 'tawkbct6'; 

  	const paramsStr = 'timestamp=' + timestamp + '&upload_preset=' + upload_preset + 'GIiXslpAPjWWRP99Lm5WzwY7iGA';
  }
  
  render() {
    return (
    	<div className="images">
		   <Dropzone onDrop={this.uploadFile.bind(this)}/>
        </div>
    );
  }
}

export default MostWatchlist;