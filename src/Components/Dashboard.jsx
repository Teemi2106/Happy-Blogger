import React from "react";
import "../Styles/Dashboard.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleBlog = () => {
    navigate("/blogs");
  };
  return (
    <motion.main
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <header className="header" style={{ backgroundColor: "grey" }}>
        <h1>HappyBl😊gger!</h1>
      </header>
      <section className="section1">
        <h1 className="welcome">Welcome To HappyBl😊gger!</h1>
        <p>A place to share your thoughts and feelings.</p>
        <button onClick={handleBlog}>Create Your Blog</button>
      </section>
      <section className="section2">
        <div>
          <h2>Choose the perfect story</h2>
          <p>
            Create a beautiful blog that fits your style. Tap into the world of
            imagination The world is your canvas, paint your story...
          </p>
        </div>
      </section>
    </motion.main>
  );
};

export default Dashboard;
