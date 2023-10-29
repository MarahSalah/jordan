import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./BlogDetails.css"; // استيراد ملف CSS

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [id]);

  if (!blog) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="blog-details-container">
      <div className="blog-details-content">
        <h2 className="blog-details-title">{blog.title}</h2>
        <p className="blog-details-body">{blog.body}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
