import { About } from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router} from "react-router-dom";
import Home from "./Components/Home/Home";
import Schedule from "./Components/Schedule/Schedule";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Schedule/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;