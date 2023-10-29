import React, { useState } from 'react';
import BlogsForm from './BlogsForm'; 
import './AddBlog.css';


const AddBlog = () => {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
  };

  return (
    <div>
      <BlogsForm onAddBlog={addBlog} />
      <div className="blogs-list">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddBlog;