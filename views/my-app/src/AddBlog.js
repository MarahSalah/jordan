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
    // يمكنك هنا إرسال معلومات المقالة إلى الخادم باستخدام مكتبة axios
  }

  return (
    <div>
      <h2>Add a Blog</h2>
      <div>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={blogData.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <textarea
          placeholder="Content"
          name="content"
          value={blogData.content}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleSubmit}>Add Blog</button>
    </div>
  );
}

export default AddBlog;
