import React from "react";
import { Link } from "react-router-dom";

import "../../assets/stylesheets/newArticle.scss";

class CreateArticle extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {

    };
    this.handelSubmit = this.handelSubmit.bind(this);
  }
 
  handelSubmit=()=> {
    console.log("rettimnbjn");
 }


  render() {
    return (
      <div className="article_create">
        <h1>New Article</h1>
        <form action="">
          <input type="text" placeholder="Article title" />
          <input type="text" placeholder="What this article about" />
          <input type="text" placeholder="Article Thumbnail URL" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="20"
            placeholder="Write your article"
          ></textarea>

          <input type="text" placeholder="Enter tags" />
          <Link className="publish_btn">
            <input type="submit" value="publish" onClick={this.handelSubmit} />
          </Link>
        </form>
      </div>
    );
  }
}
export default CreateArticle;
