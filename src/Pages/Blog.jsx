import React from "react";
import Feed from "./Feed";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import "../Styles/Blog.css";
import { motion } from "framer-motion";

const Blog = ({ posts }) => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <Header />
      <Nav />
      <main className="Home">
        {!posts.length ? (
          <p style={{ marginTop: "2rem" }}>No posts found...</p>
        ) : (
          <Feed className="feed" posts={posts} />
        )}
      </main>
    </motion.div>
  );
};

export default Blog;
