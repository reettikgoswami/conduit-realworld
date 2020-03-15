import React from "react";

import "../../assets/stylesheets/home.scss";
import { Link } from "react-router-dom";

import PreviewArticle from "./previewArticle";

class GlobalFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          title: "How to train your dragon",
          description: "Ever wonder how?",
          tagList: ["dragons", "training"],
          createdAt: "2016-02-18T03:22:56.637Z",
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTb7uD2w2Aw5_rXUWnkIli-3Gf4VIFJJiiMnYOtofh52RwmW2Ap",
          author: {
            username: "jake",
            image: "https://i.stack.imgur.com/xHWG8.jpg"
          }
        },
        {
          title: "How to train your dragon",
          description: "Ever wonder how?",
          tagList: ["dragons", "training"],
          createdAt: "2016-02-18T03:22:56.637Z",
          img:
            "https://itswynnesworld.files.wordpress.com/2014/09/how-to-train-your-dragon-2-poster.jpg",
          author: {
            username: "jake",
            image:
              "https://ph-avatars.imgix.net/74445/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
          }
        },
        {
          title: "How to train your dragon",
          description: "Ever wonder how?",
          tagList: ["dragons", "training"],
          createdAt: "2016-02-18T03:22:56.637Z",
          img:
            "https://itswynnesworld.files.wordpress.com/2014/09/how-to-train-your-dragon-2-poster.jpg",
          author: {
            username: "jake",
            image: "https://i.stack.imgur.com/xHWG8.jpg"
          }
        },
        {
          title: "How to train your dragon",
          description: "Ever wonder how?",
          tagList: ["dragons", "training"],
          createdAt: "2016-02-18T03:22:56.637Z",
          img:
            "https://itswynnesworld.files.wordpress.com/2014/09/how-to-train-your-dragon-2-poster.jpg",
          author: {
            username: "jake",
            image: "https://i.stack.imgur.com/xHWG8.jpg"
          }
        },
        {
          title: "How to train your dragon",
          description: "Ever wonder how?",
          tagList: ["dragons", "training"],
          createdAt: "2016-02-18T03:22:56.637Z",
          img:
            "https://itswynnesworld.files.wordpress.com/2014/09/how-to-train-your-dragon-2-poster.jpg",
          author: {
            username: "jake",
            image:
              "https://ph-avatars.imgix.net/74445/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
          }
        }
      ]
    };
  }
  render() {
    return (
      <>
        {this.state.articles.map(article => (
          <PreviewArticle article={article} />
        ))}
      </>
    );
  }
}

export default GlobalFeed;
