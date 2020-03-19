import React, { Component } from 'react';

import "../../assets/stylesheets/profile.scss";
class UpdateProfile extends Component {
  render() {
    return (
      <div className="article">
        <center><h2 >user setting</h2></center> 
      <form action="">
        <input type="text" placeholder="Url of profile photo" />
        <input type="text" placeholder="username" />
        <textarea
          name=""
          id=""
          cols="10"
          rows="10"
          
          placeholder="short bio"
        ></textarea>
        <input type="text" placeholder="user name" />
        <input type="text" placeholder="password" />

        <input type="submit" value="publish article" />
      </form>
    </div>
    );
  }
}

export default UpdateProfile;