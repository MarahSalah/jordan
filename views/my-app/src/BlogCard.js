import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ blog }) {
  return (
    
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-semibold mb-2">{blog.blog_title}</h3>
      <p className="text-gray-600 mb-4">{blog.blog_description}</p>
      <p className="text-blue-500">
        {/* إضافة الرابط للانتقال إلى صفحة التفاصيل */}
        <Link to={`/blog/${blog.id}`}>اقرأ المزيد</Link>
      </p>
    </div>
    
  );
}

export default BlogCard;
