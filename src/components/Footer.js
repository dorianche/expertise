import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="p-4 bg-white sm:p-6 w-full ">
      <div class="mx-auto max-w-screen-xl px-20">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a href="/" class="flex items-center">
              <span class="self-center text-2xl font-semibold whitespace-nowrap ">
                LC Expert
              </span>
            </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Coordonnées
              </h2>
              <ul class="text-gray-600 dark:text-gray-400">
                <li class="mb-4">30 rue de Bourgogne</li>
                <li class="mb-4">17470 AULNAY</li>
                <li>06 54 34 23 18</li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Nous suivre
              </h2>
              <ul class="text-gray-600 ">
                <li class="mb-4">
                  <a href="/" class="hover:underline ">
                    LinkedIn
                  </a>
                </li>
                <li className="mb-4">
                  <Link to="/contact" class="hover:underline">
                    Contact
                  </Link>
                </li>
                <li class="mb-4">
                  <Link to="/mentions" class="hover:underline">
                    Mentions légales
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center ">
            2023 ©{" "}
            <a href="/" class="hover:underline">
              LC Expert
            </a>
            . Site réalisé par DC
          </span>
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="/" class="text-gray-500 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
