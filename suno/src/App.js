import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import LandingPageCarousel from "./LandingPageCarousel";
import MoreInfo from "./MoreInfo";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <LandingPageCarousel></LandingPageCarousel>
      <MoreInfo></MoreInfo>
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
