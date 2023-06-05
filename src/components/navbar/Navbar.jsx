import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <li className="navbar-element">
        <Link className="none" to="/projects">
          Projects
        </Link>
      </li>
      <li className="navbar-element">
        <Link className="none" to="/experience">
          Experience
        </Link>
      </li>
      <li className="navbar-element">
        <Link className="none" to="/about">
          About
        </Link>
      </li>
      <li className="navbar-element">
        <Link className="none" to="/contact">
          Contact
        </Link>
      </li>
    </div>
  );
};

export default Navbar;
