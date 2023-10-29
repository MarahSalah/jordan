import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-white text-xl font-semibold">Jordan tourism Blog</span>
        </div>
        <div className="hidden md:flex space-x-4 mx-auto"> 
          <Link to="/Home" className="text-white hover:text-gray-400">Home</Link>
          <Link to="/BlogDetails" className="text-white hover:text-gray-400">Blogs</Link>
          <Link to="/Dashbord" className="text-white hover:text-gray-400">Dashboard</Link>
          <Link to="/Registration" className="text-white hover:text-gray-400">Signup</Link>
          <Link to="/Login" className="text-white hover:text-gray-400">Login</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-blue-950 py-2">
          <Link to="/Home" className="block text-center text-white py-2 hover:bg-blue-800">Home</Link>
          <Link to="/BlogsDetails" className="block text-center text-white py-2 hover:bg-blue-800">Blogs</Link>
          <Link to="/Registration" className="block text-center text-white py-2 hover:text-gray-400">Signup</Link>
          <Link to="/Login" className="block text-center text-white py-2 hover:text-gray-400">Login</Link>
          <Link to="/Dashbord" className="block text-center text-white py-2 hover:text-gray-400">Dashboard</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
