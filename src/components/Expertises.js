import React from "react";
import Card from "./Card";

const Expertises = () => {
  return (
    <div className=" flex flex-col lg:px-24 mb-20">
      <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl self-center pb-10">
        Nos expertises
      </h1>

      <div className="flex flex-wrap gap-20 justify-around">
        <Card
          title="Pathologie du bâtiment"
          subtext="Un check-up complet du bâtiment"
          image="https://images.unsplash.com/photo-1512069511692-b82d787265cf?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          link="/pathologie"
        />
        <Card
          title="Fissures"
          subtext="Diagnostic & analyse de la solution à mettre en oeuvre"
          link="/fissures"
          image="https://images.unsplash.com/photo-1606362811767-c96ff375b3d9?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          title="Humidité - Dégâts des eaux"
          subtext="Recherche de la cause & de la solution adaptée"
          link="/humidite"
          image="https://images.unsplash.com/photo-1693594558979-aed4872ff156?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          title="Analyse de projet avant construction"
          subtext="Visite du terrain & analyse du projet"
          link="/analyse"
          image="https://plus.unsplash.com/premium_photo-1683141558265-d0449dbf26fa?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          title="Assistance à livraison VEFA "
          subtext="Vérification de la conformité et de l'application des règles de l'art"
          link="/livraison"
          image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          title="Assistance à réception CCMI"
          subtext="Visite, conseil et relevé des réserves"
          link="/reception"
          image="https://images.unsplash.com/photo-1537199322506-85bfd51c0601?q=80&w=3091&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          title="Evaluation thermique"
          subtext="Assistance et conseil concernant la qualité thermique de votre bâtiment"
          link="/thermique"
          image="https://images.unsplash.com/photo-1619140099965-06d74aaf51fa?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default Expertises;
