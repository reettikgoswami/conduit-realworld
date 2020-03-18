import React from "react";
import { Link, NavLink } from "react-router-dom";

import { FaCuttlefish } from "react-icons/fa";
import "../../assets/stylesheets/header.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "reettik"
    };
  }
  render() {
    return (
      <header>
        <div className="header_container header_flex">
          <Link className="logo_icon_wrapper" href="">
            <FaCuttlefish />
            <h1 className="logo">onduit</h1>
          </Link>
          <div>
           
             {
               this.props.isLoggedIn ?(
                <nav className="header_nav">
              <NavLink to="/">home</NavLink>
              <NavLink to="/new">new post</NavLink>
              <NavLink to="/user">setting</NavLink>
              <NavLink to="/">profile</NavLink>
              </nav>
               ) : (
                <nav className="header_nav">
                <NavLink to="/">home</NavLink>
                <NavLink activeClassName="signup_btn" to="/login">
                login
              </NavLink>
              <NavLink activeClassName="signup_btn" to="/signup">
                sign up
              </NavLink>
              </nav>
               )
             }
              {/* <NavLink to="/">home</NavLink>
              <NavLink to="/new">new post</NavLink>
              <NavLink to="/user">setting</NavLink>
              <NavLink activeClassName="signup_btn" to="/login">
                login
              </NavLink>
              <NavLink activeClassName="signup_btn" to="/signup">
                sign up
              </NavLink> */}
           
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
