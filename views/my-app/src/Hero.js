import React from "react";

const Hero = ({ onAddBlogClick }) => {
  return (
    <div className="bg-indigo-50 text-blue-950 py-16 text-center relative">
      <img
        src="https://layalina.awicdn.com/site-images/sites/default/files/prod/article/5/5/407436/57e3141284a9365b5307bb61b1b8283ec9df809f-070621193658.jpg?preset=v3.0_970XDYN&rnd=12344&save-png=1.jpg"
        alt="Travelers Blog"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="relative z-10 text-white">
        <h1 className="text-4xl font-bold mb-4 transition-all duration-3 ease-in-out">
        Welcome to the Jordan tourism blog
        </h1>
        <p className="text-blue-950-lg mb-8">
        Explore the best destinations and experiences in Jordan
        </p>
      </div>
    </div>
  );
};

export default Hero;