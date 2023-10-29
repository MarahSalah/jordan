import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import BlogDetails from "./BlogDetails"; 
import "./App.css";
import "./index.css";
import { useState } from "react";
import AuthForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import Dashboard from "./Dashbord";


const App = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      image: "https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2020/05/Dead-Sea-Beaches-scaled-e1589809735923.jpg?fit=1500%2C1000&ssl=1",
      description: "Description of Blog 1",
      author: "Author 1",
    },

  ]);

  const addBlog = (newBlog) => {
    newBlog.id = blogs.length + 1;
    setBlogs([...blogs, newBlog]);
  };


  return (
    <Router>
    <Header />
    <Routes>
      <Route path="Home" element={<Home blogs={blogs} onAddBlog={addBlog} />} />
      <Route path="/blogs/:id" element={<BlogDetails blogs={blogs} />} />
      <Route path="/Dashbord" element={<Dashboard />} />
      <Route path="/Registration" element={<AuthForm />} />
      <Route path="/Login" element={<LoginForm/>} />
     
    </Routes>
    <Footer />
    </Router> 
  );
};

export default App;