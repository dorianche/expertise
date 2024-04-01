import React from "react";
import expert from "../images/expert.jpg";
import { Link } from "react-router-dom";

const Pathologie = () => {
  return (
    <section class="bg-white mt-24 ">
      <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          class="w-full "
          src="https://images.unsplash.com/photo-1693594558979-aed4872ff156?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="dashboard image"
        />

        <div class="mt-4 md:mt-0">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
            LC Expert, un expert pour vos problèmes d'humidité et dégâts des
            eaux
          </h2>
          <p class="mb-6 font-light text-gray-500 md:text-lg pt-7 ">
            Notre expertise en dégâts des eaux et en humidité est essentielle
            pour garantir la salubrité et la durabilité des bâtiments. Par une
            évaluation minutieuse, nous identifions l'origine des infiltrations
            d'eau et des excès d'humidité, qu'ils proviennent de défauts
            d'étanchéité, de problèmes de plomberie ou de la capillarité des
            matériaux. Cette analyse permet de :
          </p>

          <ul class="max-w-md space-y-1 text-gray-500 list-inside ">
            <li class="flex items-center">
              <svg
                class="w-3.5 h-3.5 me-2 text-green-500 d flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Localiser précisément les zones affectées par l'humidité.
            </li>
            <li class="flex items-center">
              <svg
                class="w-3.5 h-3.5 me-2 text-green-500  flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Évaluer l'impact sur la structure et les matériaux du bâtiment.
            </li>
            <li class="flex items-center">
              <svg
                class="w-3.5 h-3.5 me-2 text-green-500  flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Proposer des solutions adaptées pour éliminer les sources
              d'humidité.
            </li>
            <li class="flex items-center">
              <svg
                class="w-3.5 h-3.5 me-2 text-green-500  flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Prévenir les risques de dégradation avancée tels que les
              moisissures et les efflorescences.
            </li>
          </ul>

          <Link
            to="/contact"
            class="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-10 "
          >
            Nous contacter
            <svg
              class="ml-2 -mr-1 w-5 h-5"
              fill="bg-blue-700"
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
        </div>
      </div>
    </section>
  );
};

export default Pathologie;
