import React from 'react';

function HomeCardDetails({ blog }) {
  return (
    <div>
      <h3 className="text-xl font-semibold">{blog.blog_title}</h3>
      <p>المكان: {blog.place_name}</p>
    </div>
  );
}

export default HomeCardDetails;
