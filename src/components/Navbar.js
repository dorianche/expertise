import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isExpertiseDropdownOpen, setIsExpertiseDropdownOpen] = useState(false);

  const toggleExpertiseDropdown = () => {
    setIsExpertiseDropdownOpen(!isExpertiseDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsExpertiseDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://lc-expert.fr/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            LC Expert
          </span>
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            06 89 22 34 32
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span class="sr-only">Nous appeler</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "flex" : "hidden"
          } md:flex items-stretch md:order-1 lg:flex-none flex-1`}
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 md:p-0 lg:justify-right mt-4 flex-1 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Notre cabinet
              </a>
            </li>
            <li className="relative" ref={dropdownRef}>
              <a
                href="#"
                className=" flex justify-center block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={toggleExpertiseDropdown}
              >
                <span>Nos expertises</span>
                <span class="material-icons">arrow_drop_down</span>
              </a>
              {isExpertiseDropdownOpen && (
                <div class="absolute h-auto py-2 mt-2 bg-white rounded-md shadow-xl">
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white"
                  >
                    Expertise 1
                  </a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white"
                  >
                    Expertise 2
                  </a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white"
                  >
                    Expertise 3
                  </a>
                </div>
              )}
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
