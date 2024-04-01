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
import Pathologie from "./components/Pathologie";
import Humidite from "./components/Humidite";
import Fissure from "./components/Fissure";
import Livraison from "./components/Livraison";
import Reception from "./components/Reception";
import Analyse from "./components/Analyse";
import Thermique from "./components/Thermique";
import Mentions from "./components/Mentions";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/cabinet" element={<Cabinet />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pathologie" element={<Pathologie />} />
        <Route path="/humidite" element={<Humidite />} />
        <Route path="/fissures" element={<Fissure />} />
        <Route path="/livraison" element={<Livraison />} />
        <Route path="/reception" element={<Reception />} />
        <Route path="/analyse" element={<Analyse />} />
        <Route path="/thermique" element={<Thermique />} />
        <Route path="/mentions" element={<Mentions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
