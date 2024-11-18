import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (

<nav className="navbar">
  <div className="navbar-left">
    <a href="/" className="logo">
      Guías Dofus 3
    </a>
  </div>
  <div className="navbar-center">
    <ul className="nav-links">
      <li>
        <a href="/Guide/guide.js">Guias</a>
      </li>
      <li>
        <a href="/about">Nosotros</a>
      </li>
      <li>
        <a href="/contact">Contacto</a>
      </li>
    </ul>
  </div>
</nav>
);
};

export default Navbar;