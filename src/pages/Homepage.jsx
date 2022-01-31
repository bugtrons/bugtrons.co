import React from "react";
// import { About } from "../Components/About/About";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Components/Home/Home";
import Schedule from "../Components/Schedule/Schedule";
// import Tobeannounced from "../Components/Tobeannounced/Tobeannounced";
import { Sponsors } from "../Components/Sponsors/Sponsors";
import Footer from "../Components/Footer/Footer";
import Organizers from "../Components/Organizers/Organizers";
import FAQ from "../Components/FAQ/FAQ";
import AboutUs from "../Components/AboutUs/AboutUs";
import Communitypartners from "../Components/Communitypartners/Communitypartners";
// import Speakers from "../Components/Speakers/Speakers";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      {/* <About /> */}
      <Schedule />
      {/* <Tobeannounced /> */}
      <Sponsors />
      {/* <Speakers /> */}
      <Communitypartners></Communitypartners>
      <FAQ />
      <Organizers />
      <Footer />
    </div>
  );
}

export default Homepage;
