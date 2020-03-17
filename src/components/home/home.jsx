import React from "react";
// import { Route } from "react-router-dom"

import "../../assets/stylesheets/home.scss";
import { Link, NavLink } from "react-router-dom";

// import ArticleContainer from "./articleContainer";
import Tag from "./tag";
import Feed from "./yourfeed";
import GlobalFeed from "./globalfeed";
import TagFeed from "./tagfeed";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "/",
      searchTag: ""
    };
  }

  componentDidMount() {
    console.log("kgxhugu", this.props.match.params);
    if (this.props.match.params.tag) {
      this.setState({
        activeTab: this.props.match.params.tag,
        searchTag: this.props.match.params.tag
      });
    } else {
      this.setState({ activeTab: this.props.match.path, searchTag: "" });
    }
  }

  // updateSearchTag=()=>{
  //   if( this.state.searchTag !== this.props.match.params.tag){
  //      this.setState({searchTag : this.props.match.params.tag , activeTab :this.props.match.params.tag});
  //    }
  // }
 
  checkActive = (match, location) => {
    if (!location) return false
    const { pathname } = location;
    console.log(pathname);
    return pathname === "/";
  };

  render() {
    //  this.updateSearchTag();     
    // console.log("search tag ", this.state.searchTag);
    return (
      <div className="home_main_container home_main_flex">
        <div className="home_article_section">
          <div className="tab_underline_container">
            <NavLink to="/feed" activeClassName="selected_tab" className="tab">
              <div className="tab-style">your feed</div>
            </NavLink>
            <NavLink
              to="/"
              activeClassName="selected_tab"
              isActive={this.checkActive}
              className="tab"
            >
              <div className="tab tab-style">Global feed</div>
            </NavLink>
            <NavLink
              exact
              strict
              to={`/tag/${this.state.activeTab}`}
              activeClassName="selected_tab"
              className="tab"
            >
              <div className="tab tab-style">{this.state.searchTag}</div>
            </NavLink>
          </div>
          <div className="articlePreview_container">
            {this.state.activeTab == "/feed" ? (
              <Feed />
            ) : this.state.activeTab == "/" ? (
              <GlobalFeed />
            ) : (
              <TagFeed tag={this.state.searchTag} />
            )}

            {/* <Feed /> */}
            {/* <GlobalFeed/> */}
            {/* <TagFeed/> */}
          </div>
        </div>

        <div className="tag_container">
          <Tag />
        </div>
      </div>
    );
  }
}

export default Home;
