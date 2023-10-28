import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BlogDetails() {
  const { id } = useParams(); // استخراج المعرف من عنوان الصفحة
  const [blog, setBlog] = useState({});

  useEffect(() => {
    // استدعاء تفاصيل المدونة من الخادم باستخدام المعرف
    axios.get(`http://localhost:8080/blog/${blog.blog_id}`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => {
        console.error('حدث خطأ: ', error);
      });
  }, [id]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Blog Details</h2>
      <h3 className="text-xl font-semibold">{blog.blog_title}</h3>
      <p>{blog.blog_description}</p>
      <p>Author: {blog.the_user}</p>
      <p>Place: {blog.place_location}</p>
      <p>blog_description: {blog.blog_description}</p>
      <p>blog_id: {blog.blog_id}</p>

      {blog.image && (
        <img
          src={blog.image} // عرض الصورة إذا كانت متوفرة
          alt="صورة المدونة"
          className="w-full max-h-48 object-cover rounded mb-4"
        />
      )}
      <p>Place Name {blog.place_name}</p>
    </div>
  );
}

export default BlogDetails;
