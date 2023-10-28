import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import BlogDetails from './BlogDetails';
import Registration from './Registration'; // استيراد مكون التسجيل
import Login from './Login'; // استيراد مكون تسجيل الدخول
import Navbar from './Navbar'; // استبدل المسار بالمسار الصحيح لكومبوننت Navbar
import Hero from './Hero'; // استبدل المسار بالمسار الصحيح لكومبوننت Hero
import Footer from './Footer';
function App() {
  // قائمة المقالات (blogs) يجب أن تكون هنا

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogdetails/:id" component={BlogDetails} />
        
      </Routes>
    </Router>
  );
}

export default App;
