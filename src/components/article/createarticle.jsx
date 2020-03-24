import React from "react";
import { Link } from "react-router-dom";

import "../../assets/stylesheets/newArticle.scss";

class CreateArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      body: "",
      tagList: [],
      ThumbnailURL: "",
      errorMassage: false
    };

    this.handelSubmit = this.handelSubmit.bind(this);
    this.handelTitle = this.handelTitle.bind(this);
    this.handelThumbnailURL = this.handelThumbnailURL.bind(this);
    this.handelDescription = this.handelDescription.bind(this);
    this.handelBody = this.handelBody.bind(this);
    this.handelTaglist = this.handelTaglist.bind(this);
  }

  handelTitle = event => {
    this.setState({ title: event.target.value  ,  errorMassage: false });
  };
  handelThumbnailURL = event => {
    this.setState({ ThumbnailURL: event.target.value ,  errorMassage: false});
  };
  handelDescription = event => {
    this.setState({ description: event.target.value  ,  errorMassage: false});
  };
  handelBody = event => {
    this.setState({ body: event.target.value , errorMassage: false });
  };
  handelTaglist = event => {
    let tagList =  event.target.value.split(" ");
    this.setState({ tagList: tagList , errorMassage: false});
  };

  handelSubmit = () => {
    let emptyField = [];
    switch (true) {
      case !this.state.title:
        emptyField.push("TITLE");
      case !this.state.description:
        emptyField.push("DESCRIPTION");
      case !this.state.body:
        emptyField.push("BODY");
    }

    if (emptyField.length) {
      this.setState({ errorMassage: emptyField });
    } else {
      fetch("https://conduit.productionready.io/api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Token ${localStorage["conduit-token"]}`
        },
        body: JSON.stringify({
          article: {
            title: this.state.title,
            description: this.state.description,
            body: this.state.body,
            tagList: this.state.tagList
          }
        })
      })
        .then(res => {
          return res.json();
        })
        .then(article => {
          console.log("article", article);
          this.props.history.push(`/article/${article.article.slug}`);
        })
        .catch(err => {
          console.log("error", err);
        });
    }
  };

  render() {
    return (
      <div className="article_create">
        <h1>New Article</h1>

        <form action="">
          <input
            type="text"
            placeholder="Article title"
            value={this.state.title}
            onChange={this.handelTitle}
          />
          <input
            type="text"
            placeholder="What this article about"
            value={this.state.description}
            onChange={this.handelDescription}
          />
          <input
            type="text"
            placeholder="Article Thumbnail URL"
            value={this.state.ThumbnailURL}
            onChange={this.handelThumbnailURL}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="20"
            placeholder="Write your article"
            onChange={this.handelBody}
            value={this.state.body}
          ></textarea>
          <input
            type="text"
            placeholder="Enter tags"
            value={this.state.tagList}
            onChange={this.handelTaglist}
          />

          {this.state.errorMassage ? (
            <div className="error_massage_container">
              {this.state.errorMassage.map(error => (
                <span className="error_massage">{error}</span>
              ))}{" "}
              <span className="error_massage"> should not be empty field</span>{" "}
            </div>
          ) : (
            ""
          )}

          <Link className="publish_btn">
            <input type="submit" value="publish" onClick={this.handelSubmit} />
          </Link>
        </form>
      </div>
    );
  }
}
export default CreateArticle;
