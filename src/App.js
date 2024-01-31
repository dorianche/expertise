import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Expertises from "./components/Expertises";
import FFEB from "./components/FFEB";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Mainpage from "./components/Mainpage";
import Cabinet from "./components/Cabinet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={Mainpage} />
        <Route path="/cabinet" element={Cabinet} />
      </Routes>
    </Router>
  );
}

export default App;
