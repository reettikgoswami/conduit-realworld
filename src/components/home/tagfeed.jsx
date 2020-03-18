import React from "react";

import {withRouter} from "react-router-dom"; 

import "../../assets/stylesheets/home.scss";
import PreviewArticle from "./previewArticle";

class TagFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: null
    };
  }
   
   updateStateArticle(tag){
  // componentDidMount() {
    fetch(`https://conduit.productionready.io/api/articles?tag=${tag}&limit=6&offset=0`)
      .then(res => {
        return res.json();
      })
      .then(articles => this.setState({articles : articles.articles ,tag : tag }))
      .catch(err => console.log(err));
  }

  render() { 
    if(this.state.tag != this.props.tag){
       this.updateStateArticle(this.props.tag)
    }
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

export default withRouter(TagFeed);
