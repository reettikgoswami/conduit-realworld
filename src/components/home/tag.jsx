import React from "react";

import "../../assets/stylesheets/home.scss";
import { IoIosBookmark } from "react-icons/io";
import { Link } from "react-router-dom";

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: null
    };
  }

  componentDidMount() {
    fetch("https://conduit.productionready.io/api/tags")
      .then(res => {
        return res.json();
      })
      .then(tags => this.setState({ tags: tags.tags }))
      .catch(err => console.log(err));
  }

  render() {
    return this.state.tags ? (
      <>
        <h4 className="tag_heading">
          <IoIosBookmark className="tag_icon" /> Topics
        </h4>
        <div className="tag_wrapper">
          {this.state.tags.map(tag => (
            <Link className="tag_btn">{tag}</Link>
          ))}
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
export default Tag;
