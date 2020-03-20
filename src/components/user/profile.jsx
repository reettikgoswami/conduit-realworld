import React, { Component } from 'react';

import {Link} from "react-router-dom";
import {IoMdSettings} from "react-icons";

class Profile extends Component {
  constructor(props){
    super(props)
  }


  render() {
    console.log(this.props);
    return (
      <div className="profile_container">

      <div className="profile_inner_container">
        
      <div className="profile_card">
        
      <div className="profile_img_container">
          <div>

           <Link></Link>
           <Link></Link>

          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDMnknvjhm9wxl0D8byJhVMEEKeUk6mworMT_XIus4oWmoe1RY" alt=""/>
        </div> 
        






        </div> 
      <div className="fav_created_article_container">

      </div>
      
      </div>

      {/* <div className="profile_card">
        <div className="profile_img_container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDMnknvjhm9wxl0D8byJhVMEEKeUk6mworMT_XIus4oWmoe1RY" alt=""/>
        </div> 
        <h1 className="name">Reettik Goswami</h1>
       
      </div> */}
     
      </div>
    );
  }
}

export default Profile;

{/* <button onClick={this.props.logoutHandle}>logout</button> */}