import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GuestBlog = ({ posts }) => {
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
        {posts.slice(-3).map((post) => (
          <article key={post.id} className="post" style={{ cursor: "pointer" }}>
            <div>
              <h2 className="title">{post.title}</h2>
              <p>{post.body}</p>
              <img
                style={{ maxWidth: "100%", aspectRatio: "3/2" }}
                src={post.file || null}
                alt=""
              ></img>
            </div>
          </article>
        ))}
      </>
      <Link
        to="/all-stories"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3.5vmin",
        }}
      >
        Show other Stories
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

export default GuestBlog;
