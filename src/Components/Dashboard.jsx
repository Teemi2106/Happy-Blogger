import React from "react";
import "../Styles/Dashboard.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleBlog = () => {
    navigate("/Signin");
  };

  const handleGuest = () => {
    navigate("/GuestBlog");
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
        <p>OR</p>
        <button className="read" onClick={handleGuest}>
          Read other people's stories
        </button>
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
      <section className="section3">
        <div>
          <h2> Share with others</h2>
          <p>
            Connect with like-minded individuals who understand you. Express
            yourself freely and connect with those who feel the same way.
          </p>
        </div>
      </section>
    </motion.main>
  );
};

export default Dashboard;
