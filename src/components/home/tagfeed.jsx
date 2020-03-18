import React from "react";

import "../../assets/stylesheets/home.scss";
import PreviewArticle from "./previewArticle";

class TagFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag : null ,
      articles: null
    };
  }

  componentDidMount() {
    
    console.log("com" ,this.props);
    fetch(`https://conduit.productionready.io/api/articles?tag=${this.props.tag}&limit=6&offset=0`)
      .then(res => {
        return res.json();
      })
      .then(articles => this.setState({articles : articles.articles}))
      .catch(err => console.log(err));
  }
  render() {
    
    console.log("tag fiels a achi");
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

export default TagFeed;
