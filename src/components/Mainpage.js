import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Expertises from "./Expertises";
import FFEB from "./FFEB";
import Contact from "./Contact";
import Footer from "./Footer";

const Mainpage = () => {
  return (
    <div className="App flex flex-col items-center ">
      <Hero />
      <Expertises />
      <FFEB />
      <Contact />
      <Footer />
    </div>
  );
};

export default Mainpage;
