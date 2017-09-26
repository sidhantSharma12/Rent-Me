import React, { Component } from 'react';
import '../css/listings.css';

class Listings extends Component {

  state = {users: []}

   componentWillMount() {
    fetch('/thelist')
      .then(res => res.json())
      .then((users) => {
        this.setState({ users:users })
      });
  }

  handleClick(event){
    console.log(event.target.getAttribute('data-username'));

    
    fetch('/login', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      username: this.state.username,
      password: this.state.password
      })
    }).then(res => res.json())
  }

  render() {
    var keynum=0;
    console.log(this.state.users)
    const list = this.state.users.map((user,i) =>{
      if(!user.image){
        return false;
      }
        return user.image.map((image,j) =>{
          keynum++;
          return(
            <div key={keynum} className="individual-user">
              <img className="my-pics" src={image}/>
              <div>{user.content[j]}</div>
              <button data-username={user.username} data-index={j} onClick={this.handleClick.bind(this)}> Watchlist </button>
            </div>
          )
      });
    });

    return (
      <div className="Listings">
      {list}
      </div>
    );
  }
}

export default Listings;