import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import LandingPageCarousel from "./LandingPageCarousel";
import MoreInfo from "./MoreInfo";
import ActivitiesPage from "./ActivitiesPage";
import { Router, Redirect } from "@reach/router";

const LandingPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <LandingPageCarousel></LandingPageCarousel>
      <MoreInfo></MoreInfo>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <LandingPage path="/"></LandingPage>
    <ActivitiesPage path="/activities"></ActivitiesPage>
    <Redirect from="/sign-up" to="/activities"></Redirect>
    <Redirect from="/login" to="/activities"></Redirect>
  </Router>,
  document.getElementById("root")
);
