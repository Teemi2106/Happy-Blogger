import React from "react";
import { Link, useParams } from "react-router-dom";

const ViewStories = ({ posts }) => {
  return (
    <div>
      <>
        {posts.map((post) => (
          <article className="post">
            <Link to={`/post/${post.id}`}>
              <h2>{post.title}</h2>
              <p className="postDate">{post.date_created}</p>
              <p className="postBody">{post.content || post.body}</p>
              <p className="postEdit">{post.edit || null}</p>
              <img className="postImage" alt="" src={post.file || null} />
            </Link>
          </article>
        ))}
      </>
    </div>
  );
};

export default ViewStories;
