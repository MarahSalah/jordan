import React from 'react';
import './Styles.css';
function Footer() {
  return (
    <footer className="bg-black p-16 text-white footer ">
        
      <div className="container mx-auto flex justify-between items-center">
        <p>Contact Us: info@tourism-jordan.com</p>
        <div className="flex space-x-16">
          <a href="#" className="text-white">
            Facebook
          </a>
          <a href="#" className="text-white">
            Twitter
          </a>
          <a href="#" className="text-white">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
