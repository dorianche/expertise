import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Expertises from "./components/Expertises";

function App() {
  return (
    <div className="App flex flex-col  ">
      <Navbar />
      <Hero />
      <Expertises />
    </div>
  );
}

export default App;
