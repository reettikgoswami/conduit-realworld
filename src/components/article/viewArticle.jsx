import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../assets/stylesheets/article.scss";

class ViewArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null
    };
  }
  componentDidMount() {
    console.log(this.props.match.params.slug);
    // dystopia-9puip1?_k=0cir4l
    // ${this.props.match.params.slug}
    fetch(
      `https://conduit.productionready.io/api/articles/${this.props.match.params.slug}`
    )
      .then(res => res.json())
      .then(article => this.setState({ article: article.article }))
      .catch(err => console.log(err));
  }
  render() {
    console.log(this.state.article);
    return this.state.article ? (
      <>
        <div className="article_banner">
          <div className="article_heading_container">
            <h1 className="article_heading">{this.state.article.title}</h1>
            <div className="author_info_wrapper">
              <span className="author_img_container">
                <img src={this.state.article.author.image} alt="" />
              </span>
              <div className="username_createAt_wrapper">
                <h4 className="author_username">
                 { this.state.article.author.username}
                </h4>
                <p className="createAt_style">{this.state.article.createdAt.slice(0 ,10)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="article_body">
            <p>{this.state.article.body}</p>
        </div>
        <div className="tag_wrapper article_tag_container">
        {this.state.article.tagList.map((tag)=><Link className="tag_btn">{tag}</Link>)}
        </div>
      </>
    ) : (
      <div className="loader_postition">
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default ViewArticle;
