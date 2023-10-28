import React, { useState } from 'react';

// قم باستيراد الكومبوننتات التي تريد استدعائها
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBlog, setNewBlog] = useState({
    blog_title: '',
    blog_description: '',
    the_user: '',
    image: '', // رابط الصورة
    place_name: '',
    place_location: '',
  });
  const [latestBlogs, setLatestBlogs] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddBlog = () => {
    // قم بإرسال البيانات إلى الخادم لإضافة المدخل
    // بعد نجاح الإضافة على الخادم، قم بتحديث الحالة المحلية لتضمين المدخل الجديد
    // يمكنك تحديد هذا الجزء وفقًا للتفاصيل الخاصة بالخادم والAPI الخاص به
  
    setLatestBlogs([...latestBlogs, newBlog]);
    setNewBlog({
      user_name: '',
      blog_id: '',
      blog_title: '',
      image: '',
      place_name: '',
      place_location: '',
    });
    closeModal();
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container mx-auto p-32">
        <h2 className="text-2xl font-semibold mb-16">Latest Blogs</h2>
        <button
          onClick={openModal}
          className="bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 text-xl"
        >
          Add Blog
        </button>
        {latestBlogs.map((blog, index) => (
          <div key={index} className="card bg-white p-16 m-4 shadow ">
            <h3 className="text-xl font-semibold">{blog.blog_title}</h3>
            <p>{blog.blog_description}</p>
            <p>Author: {blog.the_user}</p>
            {blog.image && (
              <img
                src={blog.image}
                alt="Images"
                className="w-full max-h-48 object-cover rounded mb-4"
              />
            )}
            <p>Place: {blog.place_name}</p>
            <p>Place name: {blog.place_name}</p>
            <p>Location: {blog.place_location}</p>
            <p>Author: {blog.Author}</p>
            <p>Description: {blog.Description}</p>
           

            <a href={`/blog/${index}`} className="text-blue-500 hover:underline">
              Details
            </a>
          </div>
        ))}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-8 rounded shadow-md w-96">
              <h2 className="text-2xl font-semibold mb-4">Add</h2>
              <input
                type="text"
                placeholder="Title"
                value={newBlog.blog_title}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, blog_title: e.target.value })
                }
                className="w-full py-2 px-3 mb-4 border rounded"
              />
              <input
                type="text"
                placeholder="Author name"
                value={newBlog.the_user}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, the_user: e.target.value })
                }
                className="w-full py-2 px-3 mb-4 border rounded"
              />
              <input
                type="text"
                placeholder="Location"
                value={newBlog.place_location}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, place_location: e.target.value })
                }
                className="w-full py-2 px-3 mb-4 border rounded"
              />

<input
                type="text"
                placeholder="Description"
                value={newBlog.place_Description}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, place_Description: e.target.value })
                }
                className="w-full py-2 px-3 mb-4 border rounded"
              />

<input
                type="text"
                placeholder="Place_name"
                value={newBlog.place_Name}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, place_Name: e.target.value })
                }
                className="w-full py-2 px-3 mb-4 border rounded"
              />


              <div className="flex justify-end">
                <button
                  onClick={handleAddBlog}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mr-2"
                >
                 Add
                </button>
                <button
                  onClick={closeModal}
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
