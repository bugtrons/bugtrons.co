import { About } from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
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
<<<<<<< HEAD
        <Schedule/>
        <Footer/>
=======
        <Schedule />
>>>>>>> e73aefc49d910f9c58269e5338f0fb169093fdf2
      </div>
    </Router>
  );
}

export default App;
