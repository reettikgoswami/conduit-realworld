import React from "react";

import "../../assets/stylesheets/home.scss";
import { Link } from "react-router-dom";

function PreviewArticle(props) {
  console.log(props.article);
  return (
    <Link>
      <div className="single_article_preview_wrapper">
        <img src={props.article.img} alt="" />
        {props.article.tagList.map(tag => (
          <span className="article_tag_style">{tag}</span>
        ))}
        <h3 className="preview_article_heading">{props.article.title}</h3>
        {/*  */}
        <p className="preview_article_description">
          {props.article.description}
        </p>

        <div className="author_info_wrapper">
          <span className="author_img_container">
            <img src={props.article.author.image} alt="" />
          </span>
          <div className="username_createAt_wrapper">
            <h4 className="author_username">{props.article.author.username}</h4>
            <p className="createAt_style">
              {props.article.createdAt.slice(0, 10)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PreviewArticle;
