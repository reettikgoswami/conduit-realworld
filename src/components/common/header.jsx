import React from "react"

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
          <div className="header_container flex">
            <a className="logo_icon_wrapper" href="">
            <FaCuttlefish /><h1 className="logo">onduit</h1>
            </a>
           <div>
          <nav className="header_nav">
            <a href="">home</a>
            <a href="">new post</a>
            <a href="">setting</a>
            <a href="">login</a>
            <a className="signup_btn" href="">sign up</a>
          </nav>
           </div>
          </div> 
      </header>
    )
  }
};

export default Header