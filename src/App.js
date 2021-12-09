import { About } from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./App.scss";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <About /> */}
      </div>
    </Router>
  );
}

export default App;
