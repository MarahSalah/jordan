import React from 'react';

function HomeCard({ blog, onCardClick }) {
  return (
    <div className="card bg-white p-16 m-4 shadow">
      <h3 className="text-xl font-semibold">{blog.blog_title}</h3>
      <p>المكان: {blog.place_name}</p>
      <button onClick={() => onCardClick(blog)} className="text-blue-500 hover:underline">
        التفاصيل
      </button>
    </div>
  );
}

export default HomeCard;
