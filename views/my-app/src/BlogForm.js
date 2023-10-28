import React, { useState } from 'react';
import axios from 'axios';

function BlogForm({ addBlog }) {
  const [newBlog, setNewBlog] = useState({
    blog_title: '',
    blog_description: '',
    the_user: '',
    image: '',
    place_name: '',
    place_location: '',
  });

  const handleAddBlog = async () => {
    try {
      // إرسال البيانات إلى الباك إند
      const response = await axios.post('http://localhost:8080/api/blogs', newBlog);

      // قم بالتحقق من الرد واتخاذ الإجراء المناسب بناءً على ذلك
      if (response.data.success) {
        // تمت إضافة المدخل بنجاح، يمكنك تحديث الواجهة لعرض المدخل الجديد
        addBlog(newBlog);
      } else {
        // فشل عملية الإضافة، يمكنك عرض رسالة خطأ للمستخدم
      }
    } catch (error) {
      // حدث خطأ أثناء الاتصال بالباك إند
      console.error('حدث خطأ: ', error);
    }
  }

  return (
    <div>
      {/* ... الحقول الخاصة بالمدخل ... */}
      <button onClick={handleAddBlog}>إضافة مدخل</button>
    </div>
  );
}

export default BlogForm;
