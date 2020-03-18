import React from "react";
import { Link } from "react-router-dom";

import "../../assets/stylesheets/home.scss";

import { IoIosBookmark } from "react-icons/io";

function PreviewArticle(props) {
  let slug =`/article/${props.article.slug}`;
  return (
    <Link to={slug}>
      <div className="single_article_preview_wrapper">
        <Link className="likes" href="">
          <IoIosBookmark />
        </Link>
        <img
          src="https://www.seoclerk.com/pics/550925-1fY25w1502215384.jpg"
          alt="defautt"
        />
        {props.article.tagList.map(tag => (
          <span className="article_tag_style">{tag}</span>
        ))}
        <h3 className="preview_article_heading">{props.article.title}</h3>
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
