import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Single from "./pages/single/single";
import Topbar from "./components/topbar/topbar";
import Sidebar from "./components/sidebar/sidebar";
import Posts from "./components/posts/posts";
import Home from "./pages/home/home";
import Write from "./pages/write/write";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Profile from "./pages/profile/profile";


 function App() {
  return (
  <div className="App">
    <Topbar/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="register" element={<Register/>} />
    <Route path="login" element={<Login/>}/>
    <Route path="write" element={<Write/>} />
    <Route path="profile" element={<Profile/>} />
    <Route path="posts/:id" element={<Single/>} />
    <Route path="posts" element={<Posts/>} />
    
  </Routes> 
  </div>
  );
}

export default App;