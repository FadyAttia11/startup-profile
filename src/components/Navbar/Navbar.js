import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="header">
      <div className="header nav-container">
        <div className="nav-bar">
          <div className="brand">
            <NavLink to="/">
              <h2>
                <span>P</span>ANACEA
              </h2>
            </NavLink>
          </div>
          <div className="nav-list">
            <div className="hamburger">
              <div className="bar"></div>
            </div>
            <ul>
              <li>
                <NavLink to="/services" activeStyle={{ color: "#cabbe9" }}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" activeStyle={{ color: "#cabbe9" }}>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/benefits" activeStyle={{ color: "#cabbe9" }}>
                  Why us?
                </NavLink>
              </li>
              <li>
                <NavLink to="/process" activeStyle={{ color: "#cabbe9" }}>
                  Process
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeStyle={{ color: "#cabbe9" }}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeStyle={{ color: "#cabbe9" }}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/work" activeStyle={{ color: "#cabbe9" }}>
                  Let's Work Together
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
