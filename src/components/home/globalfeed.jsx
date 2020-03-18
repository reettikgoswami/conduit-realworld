import React from "react";

import "../../assets/stylesheets/home.scss";
import PreviewArticle from "./previewArticle";

class GlobalFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: null
    };
  }

  componentDidMount() {
    fetch("https://conduit.productionready.io/api/articles?limit=7&offset=0")
      .then(res => {
        return res.json();
      })
      .then(articles => this.setState({articles : articles.articles}))
      .catch(err => console.log(err));
  }
  
  render() {
    return this.state.articles?(
      <>
        {this.state.articles.map(article => (
          <PreviewArticle article={article} />
        ))}
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

export default GlobalFeed;
