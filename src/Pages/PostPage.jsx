import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../Components/Header";
import "../Styles/Blog.css";
import { motion } from "framer-motion";

const PostPage = ({
  posts,
  handleDelete,
  handleEdit,
  postEdit,
  setPostEdit,
}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <Header />
      <main className="PostPage">
        <article className="post">
          {post && (
            <div className="content">
              <h2>{post.title}</h2>
              <img className="postImage" alt="" src={post.file || null} />
              <p className="postDate">{post.date_created}</p>
              <p className="postBody">{post.content || post.body}</p>
              <p className="postEdit">{post.edit || null}</p>

              <button className="button" onClick={() => handleDelete(post.id)}>
                <svg viewBox="0 0 448 512" className="svgIcon">
                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                </svg>
              </button>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleEdit();
                }}
                className="editForm"
              >
                <label
                  style={{
                    border: "2px solid black",
                    borderRadius: "10px",
                    height: "7vmin",
                    padding: "1.5vmin",
                  }}
                  htmlFor="postBody"
                >
                  Post:
                </label>
                <textarea
                  id="postBody"
                  required
                  value={postEdit}
                  onChange={(e) => setPostEdit(e.target.value)}
                />
                <button className="edit" type="submit" onClick={handleEdit}>
                  Edit Post
                </button>
              </form>
            </div>
          )}
          {!post && (
            <>
              <h2>Post Not Found</h2>
              <p>
                <Link to="/Dashboard">Go back To Dashboard</Link>
              </p>
              <p>
                <Link to="/blogs">Go back To Blogpage</Link>
              </p>
            </>
          )}
        </article>
      </main>
    </motion.div>
  );
};

export default PostPage;
