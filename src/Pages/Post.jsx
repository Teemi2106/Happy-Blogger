import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Blog.css";

const Post = ({ post }) => {
  return (
    <article className="post">
      <Link to={`/post/${post.id}`}>
        <h2 className="title">
          {post.title.length > 20
            ? post.title.slice(0, 20) + "..."
            : post.title}
        </h2>
      </Link>
    </article>
  );
};

export default Post;
