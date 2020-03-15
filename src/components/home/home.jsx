import React from "react";
// import { Route } from "react-router-dom"

import "../../assets/stylesheets/home.scss";

import Feed from "./yourfeed";
import GlobalFeed from "./globalfeed";
import Tag from "./tag";

import { Link  , NavLink} from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="home_main_container home_main_flex">
        <div className="home_article_section">
          <div className="tab_underline_container">
            <NavLink activeClassName="selected_tab" to="/" className="tab">
              <div className=" tab-style">your feed</div>
            </NavLink>
            <NavLink  to="/" className="tab">
              <div className="tab tab-style">Global feed</div>
            </NavLink>
          </div>
           
         <div className="article_container">
         <Feed />
         </div>  

        </div>
        <div className="tag_container">
        <Tag/>
        </div>
         
      </div>
    );
  }
}

export default Home;
