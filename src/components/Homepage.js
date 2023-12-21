import React, { useEffect } from "react";

import First from "../pages/First";
import Howitworks from "../pages/Howitworks";
import About from "../pages/About";
import Token from "../pages/Token";
import Faq from "../pages/Faq";
import Whitepaper from "../pages/Whitepaper";
import Clients from "../pages/Clients";
import Ethcal from "./Ethcal";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return (
    <>
      <First />
      <Howitworks />
      <About />
      <Token />
      <Faq />
      <Whitepaper />
      <Clients />

      <a href="#" class="scrollup btn-default" style={{ display: "none" }}>
        <i class="ion-ios-arrow-up"></i>
      </a>
    </>
  );
};

export default Homepage;
