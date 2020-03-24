import React, { Component } from "react";
import { withRouter, NavLink, Route } from "react-router-dom";

import { Link } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";

import MyArticle from "../home/myarticle";
import FavArticle from "../home/favarticle";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {}
    };
  }

  componentDidMount() {
    if (localStorage["conduit-token"]) {
      fetch(" https://conduit.productionready.io/api/profiles/reettik", {
        method: "GET",
        headers: {
          authorization: `Token ${localStorage["conduit-token"]}`
        }
      })
        .then(res => {
          return res.json();
        })
        .then(user => {
          console.log("user detail" ,  user);
          this.setState({ profile: user.profile });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  render() {
    console.log("history check " , this.props);
    return (
      <div className="profile_container">
        <div className="profile_inner_container">
          <div className="profile_card">
            <div className="edit_logout_wrapper">
              <Link to="/setting">
                <FaUserEdit />
              </Link>
              <Link onClick={()=>this.props.logoutHandle(this.props)}>
                <AiOutlineLogout />
              </Link>
            </div>

            <div className="profile_img_container">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDMnknvjhm9wxl0D8byJhVMEEKeUk6mworMT_XIus4oWmoe1RY"
                alt=""
              />
            </div>
            <h2 className="name">{this.state.profile.username}</h2>
            <p className="bio">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              quaerat cum ea accusantium expedita blanditiis sequi ipsum veniam,
              reprehenderit vel officiis at.
            </p>
            <div className="follower_following_container">
              <div className="follow_count_wrapper">
                <span className="follow_count">34</span>
                <span className="span_follow">following</span>
              </div>
              <div className="follow_count_wrapper">
                <span className="follow_count">120k</span>
                <span className="span_follow">follower</span>
              </div>
            </div>

            <Link className="follow_btn_center">
              <button className="follow_btn">follow</button>{" "}
            </Link>
          </div>

          <div className="fav_created_article_container">
            <div className="tab_underline_container">
              <NavLink
                exact
                to="/user"
                activeClassName="selected_tab"
                className="tab"
              >
                <div className="tab-style">My Articles</div>
              </NavLink>

              <NavLink
                exact
                to="/user/favouriteArticles"
                activeClassName="selected_tab"
                isActive={this.checkActive}
                className="tab"
              >
                <div className="tab tab-style">Favorited Articles</div>
              </NavLink>
            </div>

            <div className="profile_articla_wrapper">
              <Route exact path="/user" component={MyArticle} />

              <Route exact path="/user/favouriteArticles" component={FavArticle} />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Profile);

{
  /* <button onClick={this.props.logoutHandle}>logout</button> */
}
