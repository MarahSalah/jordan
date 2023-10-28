import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const linksStyle = {
    display: 'flex',
    gap: '20px',
  };

  return (
    <nav className="bg-white p-4" style={navbarStyle}>
      <div className="container mx-auto">
        <Link to="/" className="text-black text-2xl font-semibold">
          Tourism blog in Jordan
        </Link>
        <ul style={linksStyle}>
          <li>
            <Link to="/" className="text-black">
              HomePage
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-black">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="text-black">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
