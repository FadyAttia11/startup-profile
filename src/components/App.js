import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Routes from "./Routes/Routes";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes />
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
