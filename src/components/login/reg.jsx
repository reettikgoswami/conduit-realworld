import React from "react";

import "../../assets/stylesheets/login-reg.scss";
import {
  FaUserAlt,
  FaEnvelope,
  FaLock,
  FaFacebookF,
  FaGoogle,
  FaGithub
} from "react-icons/fa";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="login_reg_container">
        <h3 className="Login_header">Sign Up on Contuit</h3>
        <div className="login_flex_container">
          <div className="login_col_2_1">
            <form action="">
              <div className="profile_wrapper">
                <span className="icon">
                  <FaUserAlt />
                </span>
                <input type="text" placeholder="Full Name" />
              </div>
              <div className="profile_wrapper">
                <span className="icon">
                  <FaEnvelope />
                </span>
                <input type="email" placeholder="Email" />
              </div>
              <div className="profile_wrapper">
                <span className="icon">
                  <FaLock />
                </span>
                <input type="password" placeholder="Password" />
              </div>
              <div className="profile_wrapper">
                <input className="sign_up_btn" type="submit" value="sign up" />
              </div>
            </form>
            <h5 className="login_bottom_heading">
              Already have a account? <Link to="/login">Log in</Link>
            </h5>
          </div>
          <div className="login_col_2_1 passportAuth_mobile_view">
            <a href="">
              <div className="login_passport_btn_wrapper">
                <span className="icon">
                  <FaFacebookF />
                </span>
                <div className="login_passport_btn FB_btn">
                  Sign up with Facebook
                </div>
              </div>
            </a>
            <a href="">
              <div className="login_passport_btn_wrapper">
                <span className="icon">
                  <FaGithub />
                </span>
                <div className="login_passport_btn github_btn">
                  Sign up with Github
                </div>
              </div>
            </a>
            <a href="">
              <div className="login_passport_btn_wrapper">
                <span className="icon_g">
                  <FaGoogle />
                </span>
                <div className="login_passport_btn google_btn">
                  Sign up with google
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
