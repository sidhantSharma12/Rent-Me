import React, { Component } from 'react';
import '../css/listings.css';

class Listings extends Component {

  state = {users: []}

   componentWillMount() {
    fetch('/thelist')
      .then(res => res.json())
      .then((users) => {
        this.setState({ users:users })
        console.log(users);
      });
  }

  render() {
    var keynum=0;

    const list = this.state.users.map((user,i) =>{
      if(!user.image){
        return false;
      }
      
        return user.image.map((image,j) =>{
          keynum++;
          return(
            <div key={keynum} className="individual-user">
              <img className="my-pics" src={image}/>
            </div>
          )
      });
    });
    console.log(list);

    return (
      <div className="Listings">
      {list}
      </div>
    );
  }
}

export default Listings;