import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AllStories = ({ posts }) => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <header
        style={{
          width: "100%",
          color: "black",
          backgroundColor: "orange",
          height: "10vmin",
          fontSize: "4vmin",
          textAlign: "center",
          fontWeight: "700",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Latest Stories
      </header>
      <>
        {posts.map((post) => (
          <article key={post.id} className="post" style={{ cursor: "pointer" }}>
            <div>
              <h2 className="title">{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </article>
        ))}
      </>
      <Link
        to="/GuestBlog"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3.5vmin",
        }}
      >
        Show less Stories
      </Link>
      <Link
        to="/"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3.5vmin",
        }}
      >
        Go back to Dashboard
      </Link>
    </motion.div>
  );
};

export default AllStories;
