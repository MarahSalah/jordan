import React, { useState } from 'react';
import axios from 'axios';

const BlogsForm = ({ onAddBlog }) => {
  const [blogData, setBlogData] = useState({
    title: '',
    image: '',
    description: '',
    author: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/', blogData);

      onAddBlog(response.data);

      setBlogData({
        title: '',
        image: '',
        description: '',
        author: '',
      });

      console.log('Blog post submitted successfully!');
    } catch (error) {
      console.error('Error submitting blog post:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };


  return (
    <div className="container mx-auto max-w-md">
      <h2 className="text-2xl font-semibold mb-8">Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-600">
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="mt-1 p-2 w-full border rounded-md"
            value={blogData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-sm font-medium text-gray-600">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            className="mt-1 p-2 w-full border rounded-md"
            value={blogData.author}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-600">
            Image URL
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="mt-1 p-2 w-full border rounded-md"
            value={blogData.image}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            className="mt-1 p-2 w-full border rounded-md"
            value={blogData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:border-blue-800"
        >
          Submit Blog
        </button>
      </form>
    </div>
  );
};

export default BlogsForm;