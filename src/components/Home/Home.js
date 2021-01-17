import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <img src={require("../../img/hero-2.png")} alt="hero-img" />
        </div>
        <div className="col-2 main-text">
          <h1>
            Reach Success by turning <br />
            Your ideas into software
          </h1>
          <p>
            Custom software development solutions for smart businesses with
            unique ideas.
          </p>
          <div className="btn-wrapper">
            <Link to="/benefits" className="btn">
              Why to Choose Us?
            </Link>
            <Link to="/work" className="inverted-btn">
              Let's Work Together
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
