import React from "react";

import PostLists from "./features/posts/PostLists";
import AddPost from "./features/posts/AddPost";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import SinglePostPage from "./features/posts/SinglePostPage";
import Navbar from "./components/Navbar"
import EditPost from "./features/posts/EditPost";
import LoginPage from "./features/auth/LoginPage";
const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route 
        path="/posts" 
        element={
          <React.Fragment>
            <AddPost />
            <PostLists />
          </React.Fragment>
        } 
      />
      <Route path="/posts/:postId" element={<SinglePostPage />} />
      <Route path="/editpost/:postId" element={<EditPost />}/>
    </Routes>
  </BrowserRouter>
);

export default App;