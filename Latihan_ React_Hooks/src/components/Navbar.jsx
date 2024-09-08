
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li> {/* Add this link */}
        <li><Link to="/products/add">Add Product</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
