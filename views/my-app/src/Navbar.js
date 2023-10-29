import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#142735', 
    color: 'white', 
    padding: '2rem',
    
  };

  const linksStyle = {
    
    display: 'flex',
    gap: '50px',
    alignItems: 'center', 
    flex: 1,
    justifyContent: 'center',
    fontSize: '20px',
  };

  return (
    <nav style={navbarStyle}>
      <div className="container mx-auto">
     
        <ul style={linksStyle}>
          <li>
            <Link to="/" className="text-white">
              HomePage
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-white">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="text-white">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
