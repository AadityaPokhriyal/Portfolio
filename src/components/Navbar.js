import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar container glass">
      <div className="nav-brand gradient-text">Aaditya.Dev</div>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Home
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Projects
        </NavLink>
        <NavLink to="/skills" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Skills
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
