import React from "react";
import Card from "./Card";

const Expertises = () => {
  return (
    <div className=" flex flex-col">
      <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl self-center pb-10">
        Nos expertises
      </h1>

      <div className="flex flex-wrap gap-20 justify-around">
        <Card
          title="Pathologie du bâtiment"
          subtext="dddddd"
          image="https://images.unsplash.com/photo-1512069511692-b82d787265cf?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          title="Fissures"
          subtext="dddddd"
          image="https://images.unsplash.com/photo-1606362811767-c96ff375b3d9?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          title="Humidité - Dégâts des eaux"
          subtext="dddddd"
          image="https://images.unsplash.com/photo-1693594558979-aed4872ff156?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          title="Analyse de projet avant construction"
          subtext="dddddd"
          image="https://plus.unsplash.com/premium_photo-1683141558265-d0449dbf26fa?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          title="Assistance à livraison VEFA "
          subtext="dddddd"
          image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          title="Assistance à réception CCMI"
          subtext="dddddd"
          image="https://images.unsplash.com/photo-1537199322506-85bfd51c0601?q=80&w=3091&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          title="Evaluation thermique"
          subtext="dddddd"
          image="https://images.unsplash.com/photo-1619140099965-06d74aaf51fa?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default Expertises;
