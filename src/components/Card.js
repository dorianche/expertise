import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, image, subtext, link }) => {
  return (
    <div className=" min-w-sm lg:w-1/4 min-w-2/5 lg:w-1/4 lg:max-w-1/5 w-4/5 bg-white border rounded-lg shadow dark:bg-gray-800 shadow-box-1">
      <div className=" h-60 ">
        <img
          className="rounded-t-lg object-cover h-full w-full"
          src={image}
          alt=""
        />
      </div>
      <div className="p-5 flex flex-col justify-between text-center gap-3 h-1/2 pb-8 ">
        <Link to={link}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {subtext}
        </p>
        <Link
          to={link}
          className="inline-flex justify-center text-center items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          En savoir plus
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Card;
