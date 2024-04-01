import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    tel: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Obtient le nom et la valeur de l'input modifié
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, // Met à jour la partie du state correspondant au nom de l'input
    }));
  };

  const mailtoLink = `mailto:${formData.email}?subject=${encodeURIComponent(
    formData.subject
  )}&body=${encodeURIComponent(formData.message)}`;

  const handleSubmit = (e) => {
    e.preventDefault();

    window.location.href = mailtoLink; // Cela va ouvrir l'application de mail par défaut de l'utilisateur avec les champs pré-remplis
  };

  return (
    <section class="bg-white pt-7 ">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
          Nous contacter
        </h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
          Besoin d'une expertise ou simplement d'un devis ? N'hésitez pas à
          prendre contact avec nous pour tous vos besoins d'expertise.
        </p>
        <form action="#" class="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Votre email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="nom@mail.fr"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
          <div>
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Téléphone (optionnel)
            </label>
            <input
              name="tel"
              type="tel"
              id="tel"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Votre numéro de téléphone"
              onChange={handleChange}
              value={formData.tel}
              required
            />
          </div>
          <div>
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Objet
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Votre besoin"
              onChange={handleChange}
              value={formData.subject}
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Votre message
            </label>
            <textarea
              name="message"
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Laissez-nous les détails de votre demande"
              onChange={handleChange}
              value={formData.message}
            ></textarea>
          </div>

          <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-black rounded-lg sm:w-fit hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
            style={{ transition: "all 0.2s ease-in-out" }}
            onmouseover="this.classList.add('font-bold')"
            onmouseout="this.classList.remove('font-bold')"
            onfocus="this.classList.add('font-bold')"
            onblur="this.classList.remove('font-bold')"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
