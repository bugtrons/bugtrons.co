import { About } from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Components/Home/Home";

import "./App.scss";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <About />
      </div>
    </Router>
  );
}

export default App;