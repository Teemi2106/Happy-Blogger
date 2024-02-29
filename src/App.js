import SignIn from "./Components/SignIn";
import Dashboard from "./Components/Dashboard";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import Blog from "./Pages/Blog";
import PostPage from "./Pages/PostPage";
import NewBlog from "./Pages/NewBlog";

const App = () => {
  const userEmail = "casper@blogger.com";
  const userpassword = "Caspersmiles";

  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/Blogposts");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/Blogposts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: postTitle,
          body: postBody,
          date_created: format(new Date(), "MMMM dd, yyyy pp"),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const newPost = await response.json();
      setPosts((prevPosts) => [...prevPosts, newPost]);
      navigate("/blogs");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/Blogposts/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      navigate("/blogs");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<SignIn userEmail={userEmail} userpassword={userpassword} />}
        ></Route>
        <Route path="/Dashboard" element={<Dashboard posts={posts} />} />
        <Route path="/blogs" element={<Blog posts={posts} />} />
        <Route
          path="/post/:id"
          element={<PostPage posts={posts} handleDelete={handleDelete} />}
        />
        <Route
          path="/NewBlog"
          element={
            <NewBlog
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
