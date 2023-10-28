import React, { useState } from 'react';
import axios from 'axios';

function Registration() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [email, setEmail] = useState('');
  const handleRegistration = async () => {
    try {
      // إرسال البيانات إلى الباك-إند للتسجيل
      const response = await axios.post('http://localhost:8080/register', formData);

      // قم بالتحقق من الرد واتخاذ الإجراء المناسب بناءً على ذلك
      if (response.data.success) {
        // التسجيل ناجح
        // يمكنك توجيه المستخدم إلى صفحة تسجيل الدخول أو أي صفحة أخرى
      } else {
        // فشل عملية التسجيل، يمكنك عرض رسالة خطأ للمستخدم
      }
    } catch (error) {
      // حدث خطأ أثناء الاتصال بالباك-إند
      console.error('خطأ: ', error);
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="User Name"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
          <input
        type="Email"
        placeholder="Email"
        value={formData.Email}
        onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
      />
      
      <button onClick={handleRegistration}>Register</button>
    </div>
    
  );
}

export default Registration;
