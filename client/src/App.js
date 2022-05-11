import React from "react"
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage";
import Login from "./screens/Auth/Login";
import Signup from "./screens/Auth/Signup";
import Main from "./screens/Main";
import PostTemplate from "./screens/Post/PostTemplate";
import NewPost from "./screens/Post/NewPost";
import AllPosts from "./screens/Post/AllPosts";
import UserPosts from "./screens/Post/UserPosts";

function App() {
  return (
    <Routes>
    <Route path="/login" element={<Login />}/>
    <Route path="/register" element={<Signup />} />
    <Route path="" element={<Main />}>
      <Route path="" element={<LandingPage />} />

      <Route path="posts" element={<PostTemplate/>}>
        <Route path="" element={<AllPosts />} />
        <Route path="user" element={<UserPosts />} />
        <Route path="add" element={<NewPost />} />
      </Route>

    </Route>

    </Routes>
  );
}

export default App;
