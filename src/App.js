import { About } from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home/Home";
import Schedule from "./Components/Schedule/Schedule";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import React from "react";
import Tobeannounced from "./Components/Tobeannounced/Tobeannounced";
// import { Sponsors } from "./Components/Sponsors/Sponsors";
function App() {
  // function FadeInSection(props) {
  //   const [isVisible, setVisible] = React.useState(true);
  //   const domRef = React.useRef();
  //   React.useEffect(() => {
  //     const observer = new IntersectionObserver(entries => {
  //       entries.forEach(entry => setVisible(entry.isIntersecting));
  //     });
  //     observer.observe(domRef.current);
  //     return () => observer.unobserve(domRef.current);
  //   }, []);
  //   return (
  //     <div
  //       className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
  //       ref={domRef}
  //     >
  //       {props.children}
  //     </div>
  //   );
  // }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Schedule />
        <Tobeannounced />
        {/* <Sponsors/> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
