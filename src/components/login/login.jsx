import React from "react";
import { Link } from "react-router-dom";

import "../../assets/stylesheets/login-reg.scss";
import {
  FaEnvelope,
  FaLock,
  FaFacebookF,
  FaGoogle,
  FaGithub
} from "react-icons/fa";


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="login_reg_container">
        <h3 className="Login_header">Log In to Contuit</h3>
        <div className="login_flex_container">
          <div className="login_col_2_1">
            <form action="">
              
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
                <input className="login_btn" type="submit" value="Log In" />
              </div>
            </form>
            <h5 className="login_bottom_heading">
            Don't have an account? <Link to="/signup">Sign Up</Link>
            </h5>
          </div>

          <div className="login_col_2_1 passportAuth_mobile_view" >
            <a href="">
              <div className="login_passport_btn_wrapper">
                <span className="icon">
                  <FaFacebookF />
                </span>
                <div className="login_passport_btn FB_btn">
                  Log In with Facebook
                </div>
              </div>
            </a>
            <a href="">
              <div className="login_passport_btn_wrapper">
                <span className="icon">
                  <FaGithub />
                </span>
                <div className="login_passport_btn github_btn">
                Log In with Github
                </div>
              </div>
            </a>
            <a href="">
              <div className="login_passport_btn_wrapper">
                <span className="icon_g">
                  <FaGoogle />
                </span>
                <div className="login_passport_btn google_btn">
                Log In with google
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
