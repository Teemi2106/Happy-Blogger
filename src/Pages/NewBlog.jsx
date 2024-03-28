import React from "react";
import Header from "../Components/Header";
import { motion } from "framer-motion";

const NewBlog = ({
  handleSubmit,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
  file,
  setFile,
}) => {
  const displayPostBody = () => {
    // Render postBody content with line breaks
    return { __html: postBody.replace(/\n/g, "<br>") };
  };
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
          />
          <label htmlFor="postBody">Post:</label>
          <textarea
            id="postBody"
            required
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
          />
          <label htmlFor="file">Paste Image URL</label>
          <input
            type="url"
            id="file"
            onChange={(e) => setFile(e.target.value)}
          />
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
        <div dangerouslySetInnerHTML={displayPostBody()} />
      </main>
    </motion.div>
  );
};

export default NewBlog;
