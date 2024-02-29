import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/Dashboard");
  };
  const handleBlog = () => {
    navigate("/blogs");
  };
  const handleNewBlog = () => {
    navigate("/NewBlog");
  };

  return (
    <div className="header">
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li onClick={handleHome}>Home</li>
          <li onClick={handleBlog}>Blogs</li>
          <li onClick={handleNewBlog}>New Blog</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
