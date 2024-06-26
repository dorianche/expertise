import React from "react";
import house from "../images/house.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section class="bg-white mt-40 lg:mt-30 mb-20">
      <div class="flex justify-around gap-10 flex-col lg:flex-row sm:flex-col xs:flex-col max-w-screen-xl px-10">
        <div class=" place-self-center">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Votre expert bâtiment certifié
          </h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
            Certifié par l'OFIB, LC Expert vous accompagne dans vos projets
            depuis 25 ans dans les départements 17, 33, 79 et 16.
          </p>
          <Link
            to="/cabinet"
            class="inline-flex items-center justify-center px-5 py-3 mr-3 mb-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 "
          >
            En savoir plus
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
          <Link
            to="/contact"
            class="inline-flex px-5 py-3 mr-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100   "
          >
            Nous contacter
          </Link>
        </div>
        <div class=" lg:mt-0 lg:w-1/2 place-self-center">
          <img src={house} alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
