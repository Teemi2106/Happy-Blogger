import React, { useState } from "react";
import "../Styles/nav.css";

const Nav = ({ posts, setPosts }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    setPosts(filteredPosts);
  };

  return (
    <form className="navForm" onSubmit={handleSearch}>
      <label className="navLabel" htmlFor="searchbox">
        Search
      </label>
      <input
        type="text"
        id="searchbox"
        placeholder="Search for posts"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <button className="searchbutton" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Nav;
