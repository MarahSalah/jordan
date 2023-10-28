import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-black py-4 text-white" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      <nav className="mt-2">
        <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none' }}>
          <li className="inline-block mr-4">
            <Link to="/" className="hover:underline">HomePage</Link>
          </li>
          <li className="inline-block mr-4">
            <Link to="/login" className="hover:underline">Login</Link>
          </li>
          <li className="inline-block">
            <Link to="/register" className="hover:underline">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
