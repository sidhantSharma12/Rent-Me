import React, { Component } from 'react';
import '../css/myrent.css';

var fetched=false;
class MyRent extends Component {

  constructor(){
    super();
    this.state = {
      content: {}
    }
  }

  componentWillMount() {
    fetch('/mylistings', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      username: localStorage.getItem("username"),
      password: localStorage.getItem("password")
      })
    }).then(res => res.json())
      .then((result) => {
        fetched=true;
        console.log(result);
        this.setState({
          content: result
        });
      });
  }

  render() {

    return (
      <div className="my-rent">
      My Rent
      {(() => { 
        if(fetched){
          return this.state.content.final[0].image.map((image,i) =>{
            return(
              <li key={i} className="my-rent-content">
                <img className="my-rent-content-pics" src={image}/>
                <br/>
                <div> {this.state.content.final[0].content[i]}</div>
              </li>
            );
          });
        }
      })()}
      </div>
    );
  }
}

export default MyRent;