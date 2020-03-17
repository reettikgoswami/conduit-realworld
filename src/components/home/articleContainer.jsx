import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";

import "../../assets/stylesheets/home.scss";

import Feed from "./yourfeed";
import GlobalFeed from "./globalfeed";
import TagFeed from "./tagfeed";


class ArticleContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      activeTab : "globalfeed"
    }
  }

  componentDidMount() {
    console.log(this.props);
    let activeTab =  "reettik";
    console.log(activeTab);
    this.setState({activeTab : activeTab});
  }
 
  render() {
    return (
      <div className="home_article_section">
      <div className="tab_underline_container">
        <NavLink  to="/feed" activeClassName="selected_tab" className="tab">
          <div className="tab-style" >your feed</div>
        </NavLink>
        <NavLink to="/home" activeClassName="selected_tab" className="tab">
          <div className="tab tab-style">Global feed</div>
        </NavLink>
        <NavLink to={`/tag/${this.state.activeTab}`} activeClassName="selected_tab" className="tab">
          <div className="tab tab-style">{this.state.activeTab}</div>
        </NavLink>
      </div>
      <div className="articlePreview_container">      
      {(this.state.activeTab == "/feed")? (<Feed/>):(this.state.activeTab == "/")?(<GlobalFeed/>):(<TagFeed tag={this.state.activeTab}/>) }
         
        {/* <Feed /> */}      
        {/* <GlobalFeed/> */}
        {/* <TagFeed/> */}
      </div>
    </div>

    );
  }
}

export default ArticleContainer;