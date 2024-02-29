import React from "react";
import Header from "../Components/Header";
import { motion } from "framer-motion";

const NewBlog = ({
  handleSubmit,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
}) => {
  return (
    <motion.div
      className="formDaddy"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <Header />
      <main className="newPost">
        <h2>New Post</h2>
        <form className="postForm" onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            required
          ></input>
          <label htmlFor="postBody">Post:</label>
          <textarea
            id="postBody"
            required
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
          />
          <button type="submit" className="submit">
            <span className="circle1"></span>
            <span className="circle2"></span>
            <span className="circle3"></span>
            <span className="circle4"></span>
            <span className="circle5"></span>
            <span className="text">Submit</span>
          </button>
        </form>
      </main>
    </motion.div>
  );
};

export default NewBlog;
