import React, { useState } from 'react';
import Hero from './Hero';
import Blogs from './Blogs';
import BlogsForm from './BlogsForm';

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <Hero />
      <div className="text-center mt-4 mb-8">
        <button onClick={toggleForm} className="bg-black text-white px-6 py-2 rounded-full hover:bg-blue-800">
          {showForm ? 'Cancel' : 'Add Blog'}
        </button>
      </div>

      {showForm && <BlogsForm />}

      <Blogs />
    </div>
  );
};

export default Home;