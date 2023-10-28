import React, { useState } from 'react';

function BlogsForm({ addBlog }) {
  const [newBlog, setNewBlog] = useState({
    blog_title: '',
    the_user: '',
    place_name: '',
  });

  const handleAddBlog = () => {
    // تقوم بإرسال البيانات إلى المكون الأب (Home) ليتم إضافتها إلى القائمة
    addBlog(newBlog);

    // تفريغ الحقول بعد إضافة المدخلة
    setNewBlog({
      blog_title: '',
      the_user: '',
      place_name: '',
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Add Blog</h2>
      <input
        type="text"
        placeholder="Blog Title"
        value={newBlog.blog_title}
        onChange={(e) => setNewBlog({ ...newBlog, blog_title: e.target.value })}
        className="w-full py-2 px-3 mb-4 border rounded"
      />
      <input
        type="text"
        placeholder="Author"
        value={newBlog.the_user}
        onChange={(e) => setNewBlog({ ...newBlog, the_user: e.target.value })}
        className="w-full py-2 px-3 mb-4 border rounded"
      />
      <input
        type="text"
        placeholder="Place Name"
        value={newBlog.place_name}
        onChange={(e) => setNewBlog({ ...newBlog, place_name: e.target.value })}
        className="w-full py-2 px-3 mb-4 border rounded"
      />
      <div className="flex justify-end">
        <button
          onClick={handleAddBlog}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mr-2"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default BlogsForm;
