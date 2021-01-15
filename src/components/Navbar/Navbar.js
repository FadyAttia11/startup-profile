import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="header">
      <div className="header container">
        <div className="nav-bar">
          <div className="brand">
            <Link to="/">
              <h1>LOGO</h1>
            </Link>
          </div>
          <div className="nav-list">
            <div className="hamburger">
              <div className="bar"></div>
            </div>
            <ul>
              <li>
                <Link to="/services" data-after="Home">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" data-after="Services">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/benefits" data-after="Projects">
                  Why us?
                </Link>
              </li>
              <li>
                <Link to="/process" data-after="Projects">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/about" data-after="About">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" data-after="Contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/work" data-after="Contact">
                  Let's Work Together
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
