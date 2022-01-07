import React from "react";
// import { About } from "../Components/About/About";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Components/Home/Home";
import Schedule from "../Components/Schedule/Schedule";
// import Tobeannounced from "../Components/Tobeannounced/Tobeannounced";
import { Sponsors } from "../Components/Sponsors/Sponsors";
import Footer from "../Components/Footer/Footer";
import Organizers from "../Components/Organizers/Organizers";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <About /> */}
      <Schedule />
      {/* <Tobeannounced /> */}
      <Sponsors />
      <Organizers />
      <Footer />
    </div>
  );
}

export default Homepage;
