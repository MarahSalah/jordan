import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BlogList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // استدعاء البيانات من الخادم باستخدام axios
    axios.get('http://localhost:8080/get-blog-data') // استبدل الرابط بالرابط الصحيح
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('حدث خطأ: ', error);
      });
  }, []); // [] تضمن أن الاستدعاء يتم مرة واحدة عند تحميل المكون

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
