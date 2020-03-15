import React from "react"
import {Link} from "react-router-dom";


import {FaCuttlefish} from "react-icons/fa";
import "../../assets/stylesheets/header.scss"

class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
     name : "reettik"
    }
  }
  render(){
    return (
      <header >
          <div className="header_container header_flex">
            <Link className="logo_icon_wrapper" href="">
            <FaCuttlefish /><h1 className="logo">onduit</h1>
            </Link>
           <div>
          <nav className="header_nav">
            <Link to="/">home</Link>
            <Link to="">new post</Link>
            <Link to="">setting</Link>
            <Link to="/login">login</Link>
            <Link to="/signup" className="signup_btn" >sign up</Link>
          </nav>
           </div>
          </div> 
      </header>
    )
  }
};

export default Header