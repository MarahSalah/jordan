import React from 'react';

function Blogs({ blogs }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Latest Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded">
            {/* عرض معلومات المدونة هنا (الاسم والصورة والمؤلف) */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
