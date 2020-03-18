import React from "react";

import "../../assets/stylesheets/newArticle.scss";

class CreateArticle extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {};
  }

  render() {
    return (
      <div className="article">
        <center><h1>New Article</h1></center>
        <form action="">
          <input type="text" placeholder="article title" />
          <input type="text" placeholder="what this atticle about" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="20"
            
            placeholder="write your article"
          ></textarea>

          <input type="text" placeholder="Enter tags" />
          <input type="submit" value="publish article" />
        </form>
      </div>
    );
  }
}
export default CreateArticle;
