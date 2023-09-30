import React from "react";

import First from "../pages/First";
import Howitworks from "../pages/Howitworks";
import About from "../pages/About";
import Token from "../pages/Token";
import Team from "../pages/Team";
import Whitepaper from "../pages/Whitepaper";
import Clients from "../pages/Clients";

const Homepage = () => {
  return (
    <>
      <First />
      <Howitworks />
      <About />
      <Token />
      <Team />
      <Whitepaper />
      <Clients />

      <a href="#" class="scrollup btn-default" style={{ display: "none" }}>
        <i class="ion-ios-arrow-up"></i>
      </a>
    </>
  );
};

export default Homepage;
