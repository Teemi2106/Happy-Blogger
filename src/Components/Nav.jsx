import React, { useState } from "react";
import "../Styles/nav.css";

const Nav = ({ search, setSearch }) => {
  console.log(search);
  return (
    <form className="navForm">
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
