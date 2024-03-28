import SignIn from "./Components/SignIn";
import Dashboard from "./Components/Dashboard";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import Blog from "./Pages/Blog";
import PostPage from "./Pages/PostPage";
import NewBlog from "./Pages/NewBlog";
import GuestBlog from "./Pages/GuestBlog";
import AllStories from "./Pages/AllStories";
import ViewStories from "./Pages/ViewStories";
import Nav from "./Components/Nav";

const App = () => {
  const userEmail = "casper@blogger.com";
  const userpassword = "Caspersmiles";

  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [file, setFile] = useState(null);
  const [postEdit, setPostEdit] = useState("");
  const [search, setSearch] = useState("");

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
          file: file || null,
          edit: postEdit || null,
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

  const handleEdit = async (id) => {
    try {
      const editedMessage = postEdit;
      if (!editedMessage) {
        console.error("Error Editing Post: Post cannot be empty");
        return;
      }
      if (editedMessage) {
        const response = await fetch(`http://localhost:4000/Blogposts/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            edit: editedMessage,
          }),
        });

        if (!response.ok) {
          throw new Error("Unable to edit");
        }

        console.log("Post edited successfully");
      }
    } catch (error) {
      console.error("Error Editing Post:", error.message);
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

  const filterPosts = () => {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/Signin"
          element={<SignIn userEmail={userEmail} userpassword={userpassword} />}
        ></Route>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/blogs"
          element={
            <Blog
              posts={posts.filter((post) =>
                post.title.toLowerCase().includes(search.toLowerCase())
              )}
            />
          }
        />
        <Route
          path="/post/:id"
          element={
            <PostPage
              posts={posts}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              postEdit={postEdit}
              setPostEdit={setPostEdit}
            />
          }
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
              file={file}
              setFile={setFile}
            />
          }
        />
        <Route path="/GuestBlog" element={<GuestBlog posts={posts} />} />
        <Route
          path="/all-stories"
          element={<AllStories posts={posts} />}
        ></Route>
        <Route path="/viewStories:id" element={<ViewStories posts={posts} />} />
      </Routes>
      <Routes>
        <Route
          path="/search"
          element={<Nav search={search} setSearch={setSearch} />}
        />
      </Routes>
    </div>
  );
};

export default App;
