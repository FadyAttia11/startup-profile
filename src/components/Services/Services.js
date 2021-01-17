import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section id="services">
      <div class="container">
        <div className="row">
          <div className="col-2">
            <img src={require("../../img/services.png")} alt="hero-img" />
          </div>
          <div className="col-2">
            <h1>
              Now it's a Great Time TO <br />
              LAUNCH YOUR NEXT GREAT IDEA
            </h1>
            <p>
              Tailored enterprise software development services to engage users
              and ignite digital transformation.
            </p>
          </div>
        </div>
        <div className="row centered-text">
          <h2>User-Focused Custom Software Development Services</h2>
          <p>
            Custom software can offer a unique competitive advantage or improve
            customer experience exponentially in a way that commercial
            off-the-shelf software cannot.
          </p>
          <p>
            Custom software development services from Blink22 allow you to
            design, build, deploy, and maintain full-stack enterprise
            applications, simply and affordably.
          </p>
        </div>
        <div className="row centered-text">
          <div className="col-2">
            <img
              src={require("../../img/service-1.svg")}
              alt="Maximize Compatibility"
              className="small-icon"
            />
            <h3>Maximize Compatibility</h3>
            <p>
              Add function and value while making sure your new software fits
              your existing architecture and infrastructure.
            </p>
          </div>
          <div className="col-2">
            <img
              src={require("../../img/service-2.svg")}
              alt="Improve User Experiences"
              className="small-icon"
            />
            <h3>Improve User Experiences</h3>
            <p>
              Improve how users engage with your company online and otherwise
              with an exclusive app tailored to their needs.
            </p>
          </div>
        </div>
        <div className="row centered-text">
          <div className="col-2">
            <img
              src={require("../../img/service-3.svg")}
              alt="Optimize Business Processes"
              className="small-icon"
            />
            <h3>Optimize Business Processes</h3>
            <p>
              Disrupt the market, not your operations with custom software that
              optimizes your processes rather than replacing them.
            </p>
          </div>
          <div className="col-2">
            <img
              src={require("../../img/service-4.svg")}
              alt="Innovate Fearlessly"
              className="small-icon"
            />
            <h3>Innovate Fearlessly</h3>
            <p>
              Capitalize on changes in the market and new technology trends with
              a customized approach that takes the future into account.
            </p>
          </div>
        </div>
      </div>
      <div className="grey-container">
        <div className="row container" style={{ paddingTop: "100px" }}>
          <div className="col-2">
            <h2>Web Development</h2>
            <h5>
              Web applications are a great way to offer simplicity and
              convenience for both your customers and employees. Web apps
              provide a unique online user interaction experience that reduces
              costs and improves retention by making it easy to complete certain
              tasks directly within a web browser, like updating an account,
              checking the status of an order, or checking email. There are many
              different types of enterprise web applications, each with a unique
              benefit. At Blink22, we develop a wide range of web applications,
              including some of the most popular types:
            </h5>
          </div>
          <div className="col-2">
            <img
              src={require("../../img/service-1.png")}
              alt="hero-img"
              style={{ margin: "110px 0 0 50px" }}
            />
          </div>
        </div>
        <div className="row container">
          <div className="col-2">
            <h2>Mobile Development</h2>
            <h5>
              By the start of 2018, users downloaded 178.1 billion mobile apps
              to their smart devices. In fact, 20% of millennials open an app at
              least 50 times a day. So, it's safe to say that mobile apps are
              blowing up. Mobile applications present a unique opportunity to
              maximize functionality and user experience without hiring a bigger
              team or opening a new office. Whether you're expanding into a new
              market or looking to offer new functionality to your existing
              customer base, an app can open the door to a new market or
              simplify how you interact with an existing market segment.
            </h5>
          </div>
          <div className="col-2">
            <img
              src={require("../../img/service-2.png")}
              alt="hero-img"
              style={{ margin: "110px 0 0 50px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
