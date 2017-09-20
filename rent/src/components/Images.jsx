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

var sendData=false;
var uploaded;

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
  		console.log('UPLOAD COMPLETE: ' + JSON.stringify(resp.body.secure_url));
  		uploaded = resp.body;
      this.props.hasUploadedphoto(true);

  		let updatedImages = Object.assign([], this.state.images);//we don't want to directly change state object
  		updatedImages.push(uploaded);

      sendData=true;
  		this.setState({
  			images:updatedImages
  		});


    })
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

  sendDataMongo(){
    fetch('/images', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      url: uploaded.secure_url,
      username : localStorage.getItem("username")
      })
    }).then((err, resp) => {
        sendData=false;
    }); 
  }

  
  render() {

    if(sendData){
      this.sendDataMongo();
    }

  	const list = this.state.images.map((image,i) =>{
  		return(
  			<li key={i} className="individual-pic">
  				<img className="my-pics" src={image.secure_url}/>
  				<br/> <a id={i} onClick={this.removeImage.bind(this)} href='#'> Remove </a>
  			</li>
  		)
  	})

    return (
    	<div className="images">
      {(() => { 
        if(!this.props.parentState.hasUploadedPhoto){
          return <Dropzone onDrop={this.uploadFile.bind(this)}/>
        }

      })()}
		   <ul className="container">
		   	  {list}
		   </ul>
       </div>
    );
  }
}

export default MostWatchlist;