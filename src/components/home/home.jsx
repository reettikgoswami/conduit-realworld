import React from "react";
import { Link, NavLink, Route } from "react-router-dom";

import "../../assets/stylesheets/home.scss";
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
    if (this.props.match.params.tag) {
      this.setState({
        activeTab: this.props.match.params.tag,
        searchTag: this.props.match.params.tag
      });
    } else {
      this.setState({ activeTab: this.props.match.path, searchTag: "" });
    }
  }



  checkActive = (match, location) => {
    if (!location) return false;
    const { pathname } = location;
    return pathname === "/";
  };

  render() {
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

            <Route
              exact
              path="/"
              component={
                GlobalFeed
              }
            />
            <Route
              exact
              path="/feed"
              component={
                Feed 
              }
            />
            <Route
              exact
              path="/tag/:tag"
              render={()=><TagFeed tag={this.state.searchTag} />}
            />

            {/* {this.state.activeTab == "/feed" ? (
              <Feed />
            ) : this.state.activeTab == "/" ? (
              <GlobalFeed />
            ) : (
              <TagFeed tag={this.state.searchTag} />
            )} */}

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
