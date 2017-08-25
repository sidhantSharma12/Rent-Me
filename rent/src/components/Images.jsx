import React, { Component } from 'react';
import App from './App.jsx';
import Test from './Test.jsx';
import Header from './Header.jsx';
import Search from './Search.jsx';
import { Switch, Route, Link } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import sha1 from 'sha1';
import superagent from 'superagent';

import '../css/Images.css';

class MostWatchlist extends Component {

  constructor(){
  	super();
  	this.state = {
  		images: []
  	}
  }		
  
  uploadFile(files){
  	console.log('uploadFile: ');

  	const image=files[0];
  	const cloudName= 'dp6f30mzf';
  	const url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/image/upload';

  	const timestamp = Date.now()/1000;
  	const uploadPreset = 'tawkbct6'; 

  	const paramsStr = 'timestamp=' + timestamp + '&upload_preset=' + uploadPreset + 'GIiXslpAPjWWRP99Lm5WzwY7iGA';

  	const signature = sha1(paramsStr);//encrypt the string

  	const params={//JSON object
  		'api_key': '639676249735238',
  		'timestamp': timestamp,
  		'upload_preset': uploadPreset,
  		'signature': signature
  	}

  	//superagent makes HTTP request on our behalf
  	let uploadRequest = superagent.post(url);
  	uploadRequest.attach('file', image); 

  	Object.keys(params).forEach((key) => {
  	  uploadRequest.field(key, params[key]);
  	});

  	uploadRequest.end((err, resp) => {
  		if(err){
  			alert(err);
  			return;
  		}
  		console.log('UPLOAD COMPLETE: ' + JSON.stringify(resp.body));
  		const uploaded = resp.body;

  		let updatedImages = Object.assign([], this.state.images);//we don't want to directly change state object
  		updatedImages.push(uploaded);

  		this.setState({
  			images:updatedImages
  		})
  	});	
  }

  removeImage(event){
  	event.preventDefault();
  	console.log('Removed image ' + event.target.id);

  	let updatedImages = Object.assign([], this.state.images);//we don't want to directly change state object
  		updatedImages.splice(event.target.id ,1);

  		this.setState({
  			images:updatedImages
  		})
  }
  
  render() {

  	const list = this.state.images.map((image,i) =>{
  		return(
  			<li key={i}>
  				<img src={image.secure_url}/>
  				<br/> <a id={i} onClick={this.removeImage.bind(this)} href='#'> Remove </a>
  			</li>
  		)
  	})

    return (
    	<div className="images">
		   <Dropzone onDrop={this.uploadFile.bind(this)}/>
		   <ul>
		   	  {list}
		   </ul>
        </div>
    );
  }
}

export default MostWatchlist;