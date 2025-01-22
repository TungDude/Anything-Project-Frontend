import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/not-found">Not Found</Link></li>
        <li><Link to="/random">Random</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;