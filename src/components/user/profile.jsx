import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

import {Link} from "react-router-dom";
import {FaUserEdit} from "react-icons/fa";
import {AiOutlineLogout} from "react-icons/ai";
 

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
        
        <div className="edit_logout_wrapper">
       <Link to="/setting"><FaUserEdit/></Link>
       <Link onClick={this.props.logoutHandle}><AiOutlineLogout /></Link>
       </div>

      <div className="profile_img_container">
     
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDMnknvjhm9wxl0D8byJhVMEEKeUk6mworMT_XIus4oWmoe1RY" alt=""/>
         </div> 
        <h2 className="name">Reettik_Goswami</h2>
        <p className="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quaerat cum ea repellendus assumenda itaque, temporibus quo ratione quam fugit, reiciendis similique, ut at pariatur distinctio maiores accusantium eum? Enim. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci culpa voluptates est et quo eligendi nesciunt sequi voluptate consequatur. Eius accusantium expedita blanditiis sequi ipsum veniam, reprehenderit vel officiis at.</p>
        
        <div className="follower_following_container">
         <div className="follow_count_wrapper">
         <span className="follow_count">34</span>
         <span className="span_follow">following</span>  
         </div>          
      <div className="follow_count_wrapper">
        <span className="follow_count">120k</span>
        <span className="span_follow">follower</span>
      </div>
 
        </div>
        
        <button className="follow_btn">follow</button>

        </div> 
        
      <div className="fav_created_article_container">

      </div>
      
      </div>
     
      </div>
    );
  }
}

export default withRouter(Profile);

{/* <button onClick={this.props.logoutHandle}>logout</button> */}