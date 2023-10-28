import React from 'react';

const heroStyle = {
    backgroundImage: `url(https://alsaa.net/image/pic_29746.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',  // تحديد اللون والشفافية هنا
    color: 'white',  // لون النص
  };
function Hero() {
  return (
    <div style={heroStyle} className="bg-blue-200 p-32 text-center">
      <h1 className="text-4xl font-semibold mb-4 ">Welcome to the Jordan tourism blog</h1>
      <p className="text-lg mb-4">Explore the best destinations and experiences in Jordan.</p>
    </div>
  );
}

export default Hero;
