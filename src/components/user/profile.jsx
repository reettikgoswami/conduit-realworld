import React, { Component } from 'react';

class Profile extends Component {
  constructor(props){
    super(props)
  }


  render() {
    console.log(this.props);
    return (
      <div>
      <div className="profile_card">
        <div className="profile_img_container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDMnknvjhm9wxl0D8byJhVMEEKeUk6mworMT_XIus4oWmoe1RY" alt=""/>
        </div> 
        <h1 className="name">Reettik Goswami</h1>
       
      </div>
      <button onClick={this.props.logoutHandle}>logout</button>
      </div>
    );
  }
}

export default Profile;