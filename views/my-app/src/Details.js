import React from 'react';

function Details({ blog }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">تفاصيل المدونة</h2>
      <h3 className="text-xl font-semibold">{blog.blog_title}</h3>
      <p>{blog.blog_description}</p>
      <p>الكاتب: {blog.the_user}</p>
      <p>المكان: {blog.place_location}</p>
      {blog.image && (
        <img
          src={blog.image}
          alt="صورة المدونة"
          className="w-full max-h-48 object-cover rounded mb-4"
        />
      )}
      <p>اسم المكان: {blog.place_name}</p>
    </div>
  );
}

export default Details;
