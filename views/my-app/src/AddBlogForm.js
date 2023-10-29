import React, { useState } from 'react';

function AddBlog() {
  const [blogData, setBlogData] = useState({
    title: '',
    content: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData({
      ...blogData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
 
  };

  return (
    <div>
      <h2>Add a Blog</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={blogData.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          name="content"
          value={blogData.content}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleSubmit}>Add Blog</button>
    </div>
  );
}

export default AddBlogForm;
