import React, { Component } from 'react';
import {Link} from "react-router-dom";

import "../../assets/stylesheets/profile.scss";
class UpdateProfile extends Component {
  render() {
    return (
      <div className="update_profile_wrapper">
        <h1 >Update Profile</h1>
        <form action="">
          <input type="text" placeholder="URL of profile picture"/>
          <input type="text" placeholder="Username" />
          {/* <input type="text" placeholder="Article Thumbnail URL" /> */}
          <textarea
            name=""
            id=""
            cols="10"
            rows="10"
            placeholder="Short bio about you"
          ></textarea>

          <input type="text" placeholder="Email" />
         <Link className="publish_btn"><input type="submit" value="publish" /></Link> 
        </form>
      </div>
    );
  }
}

export default UpdateProfile;