import React from "react";
import { Link , withRouter } from "react-router-dom";

import "../../assets/stylesheets/login-reg.scss";
import {
  FaEnvelope,
  FaLock,
  FaFacebookF,
  FaGoogle,
  FaGithub
} from "react-icons/fa";

function Login(props){
 
  let email = React.useRef(null);
  let password = React.useRef(null);
  
  function handalLogin() {
    fetch(`https://conduit.productionready.io/api/users/login`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        user: {
          email: email.current.value,
          password: password.current.value
        }
      })
    })
      .then(res => res.json())
      .then(userinfo => {      
        if(userinfo.errors){
          console.log("error", userinfo.errors);   
        }else{
          console.log(userinfo);
          props.history.push("/");
          props.updateIsLoggedIn(true);
          localStorage.setItem("conduit-token" , userinfo.user.token);
          localStorage.setItem("username" , userinfo.user.username);
        }
      })
      .catch(err => console.log("err", err));
  }
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
                <input type="email" placeholder="Email" ref={email} />
              </div>
              <div className="profile_wrapper">
                <span className="icon">
                  <FaLock />
                </span>
                <input type="password" placeholder="Password" ref={password} />
              </div>

              <div className="profile_wrapper">
                <input className="login_btn" type="button" onClick={handalLogin} value="Log In" />
              </div>
            </form>
            <h5 className="login_bottom_heading">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </h5>
          </div>
          <div className="login_col_2_1 passportAuth_mobile_view">
            <Link to="/signup">
              <div className="login_passport_btn_wrapper">
                <span className="icon">
                  <FaFacebookF />
                </span>
                <div className="login_passport_btn FB_btn">
                  Log In with Facebook
                </div>
              </div>
            </Link>
            <Link to="/signup">
              <div className="login_passport_btn_wrapper">
                <span className="icon">
                  <FaGithub />
                </span>
                <div className="login_passport_btn github_btn">
                  Log In with Github
                </div>
              </div>
            </Link>
            <Link to="/signup">
              <div className="login_passport_btn_wrapper">
                <span className="icon_g">
                  <FaGoogle />
                </span>
                <div className="login_passport_btn google_btn">
                  Log In with google
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default withRouter(Login);
