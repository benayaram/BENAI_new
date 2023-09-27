import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Company Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="/about">About</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/models">Models</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
