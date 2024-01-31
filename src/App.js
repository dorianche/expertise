import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Expertises from "./components/Expertises";
import FFEB from "./components/FFEB";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={App} />
      </Routes>

      <div className="App flex flex-col items-center ">
        <Navbar />
        <Hero />
        <Expertises />
        <FFEB />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
