import React from "react";

const Benefits = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <img src={require("../../img/benefits.png")} />
        </div>
        <div className="col-2">
          <h1>there are a lot of roads that you can go down!</h1>
          <p>
            When it comes to web development, there are a lot of agencies &
            companies that can get the job done for you. <br />
            <strong>Why to choose us instead of anybody else?</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
