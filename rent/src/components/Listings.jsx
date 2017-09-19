import React, { Component } from 'react';
import '../css/listings.css';

class Listings extends Component {

  state = {users: []}

   componentWillMount() {
    fetch('/thelist')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {

    const list = this.state.users.map((user,i) =>{
      if(!user.image){
        return false;
      }
      return(
        <div key={i} className="individual-user">
          <img className="my-pics" src={user.image[0]}/>
          <div> {user.username} </div>
          <div> {user.password} </div>
        </div>
      )
    });

    return (
      <div className="Listings">
      {list}
      </div>
    );
  }
}

export default Listings;