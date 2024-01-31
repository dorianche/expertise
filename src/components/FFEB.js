import React from "react";

const FFEB = () => {
  return (
    <div class="w-5/6 flex flex-col gap-10 items-center p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mb-20 shadow-box-1 ">
      <div>
        <img
          src="https://federation-francaise-experts-batiments.fr/wp-content/themes/FFEB-2021/images/Expertises-batiment-FFEB.png"
          alt="FFEB"
        />
      </div>
      <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        Membre de la Fédération Française des Experts en Bâtiment
      </h5>
      <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400 mx-10">
        La FFEB vous garantit des avis d'experts qualifiés, dotés d'une grande
        expérience dans les métiers du bâtiment. Tous ses membres sont des
        professionnels reconnus et certifiés.
      </p>
    </div>
  );
};

export default FFEB;
