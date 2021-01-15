import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Home/Home";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Process from "../Process/Process";
import About from "../About/About";
import Benefits from "../Benefits/Benefits";
import Contact from "../Contact/Contact";
import Work from "../Work/Work";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/projects" component={Projects} />
      <Route path="/process" component={Process} />
      <Route path="/about" component={About} />
      <Route path="/benefits" component={Benefits} />
      <Route path="/contact" component={Contact} />
      <Route path="/work" component={Work} />
    </Switch>
  );
};

export default Routes;
