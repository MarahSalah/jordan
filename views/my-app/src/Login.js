import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleLogin = async () => {
    try {
      // إرسال البيانات إلى الباك-إند للتحقق من صحة تسجيل الدخول
      const response = await axios.post('http://localhost:8080/login', formData);

      // قم بالتحقق من الرد واتخاذ الإجراء المناسب بناءً على ذلك
      if (response.data.success) {
        // تسجيل الدخول ناجح
        // يمكنك توجيه المستخدم إلى الصفحة الرئيسية أو أي صفحة أخرى
      } else {
        // تسجيل الدخول فاشل، يمكنك عرض رسالة خطأ للمستخدم
      }
    } catch (error) {
      // حدث خطأ أثناء الاتصال بالباك-إند
      console.error('error: ', error);
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="User name"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;












