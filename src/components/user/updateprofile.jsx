import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../assets/stylesheets/profile.scss";
class UpdateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      image: "",
      bio: "",
      email: "",
      errorMassage: ["reettik" , "hjcsvhjcvjsh"]
    };
   
    this.handelSubmit = this.handelSubmit.bind(this);
    this.handelUsername = this.handelUsername.bind(this);
    this.handelImage = this.handelImage.bind(this);
    this.handelBio = this.handelBio.bind(this);
    this.handelEmail = this.handelEmail.bind(this);

  }

  handelSubmit=(event)=>{
    console.log(this.state);
    




  }
  handelUsername = (event)=>{
    this.setState({ username : event.target.value ,  errorMassage: false});
  }
  handelImage= (event)=>{
    this.setState({ image : event.target.value ,  errorMassage: false});
  }
  handelBio = (event)=>{
    this.setState({ bio : event.target.value ,  errorMassage: false});
  }
  handelEmail = (event)=>{
    this.setState({ email : event.target.value ,  errorMassage: false});
  }



  componentDidMount() {
    fetch("https://conduit.productionready.io/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Token ${localStorage["conduit-token"]}`
      }
    })
      .then(res => res.json())
      .then(userinfo => {
        if(userinfo.errors){
            this.setState({errorMassage : userinfo.errors })
        }else{
        this.setState({
          username: userinfo.user.username,
           image : userinfo.user.image,
           bio : userinfo.user.bio ,
           email : userinfo.user.email
        });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="update_profile_wrapper">
        <h1>Update Profile</h1>
        <form action="">
          <input type="text" value={this.state.image} onChange={this.handelImage}  placeholder="URL of profile picture" />
          <input type="text" value={this.state.username} onChange={this.handelUsername} placeholder="Username" />
          <textarea
            name=""
            id=""
            cols="10"
            rows="10"
            value={this.state.bio}
            onChange={this.handelBio}
            placeholder="Short bio about you"
          ></textarea>
          <input type="text" value={this.state.email} onChange={this.handelEmail} placeholder="Email" />
          <Link className="publish_btn">

       
          {/* {this.state.errorMassage ? (
            <div className="error_massage_container">
              {this.state.errorMassage.map(error => (
                <span className="error_massage">{error}</span>
              ))}{" "}
              <span className="error_massage"> should not be empty field</span>{" "}
            </div>
          ) : (
            ""
          )} */}
   



            <input type="submit" value="Update" onClick={this.handelSubmit} />
          </Link>
        </form>
      </div>
    );
  }
}

export default UpdateProfile;
