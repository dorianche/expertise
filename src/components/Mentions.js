import React from "react";

const Mentions = () => {
  return (
    <div className="mt-24">
      <header>
        <h1>Mentions Légales</h1>
      </header>
      <section>
        <h2>Éditeur du site</h2>
        <p>Nom de l'entreprise : [Nom de l'entreprise]</p>
        <p>Forme juridique : [SARL, SAS, SA, etc.]</p>
        <p>Adresse : [Adresse complète]</p>
        <p>Téléphone : [Numéro de téléphone]</p>
        <p>Email : [Adresse email]</p>
        <p>RCS : [Numéro RCS]</p>
        <p>TVA intracommunautaire : [Numéro de TVA]</p>
      </section>

      <section>
        <h2>Directeur de la publication</h2>
        <p>[Nom du directeur de publication]</p>
      </section>

      <section>
        <h2>Hébergement du site</h2>
        <p>Nom de l'hébergeur : [Nom de l'hébergeur]</p>
        <p>Adresse : [Adresse de l'hébergeur]</p>
        <p>Téléphone : [Numéro de téléphone de l'hébergeur]</p>
      </section>

      <section>
        <h2>Conditions d'utilisation</h2>
        <p>
          Le site accessible par les url suivantes : [url] est exploité dans le
          respect de la législation française. L'utilisation de ce site est
          régie par les présentes conditions générales. En utilisant le site,
          vous reconnaissez avoir pris connaissance de ces conditions et les
          avoir acceptées. Celles-ci pourront être modifiées à tout moment et
          sans préavis par l'entreprise.
        </p>
      </section>

      <section>
        <h2>Données personnelles</h2>
        <p>
          Les informations collectées sont destinées uniquement à l'usage de
          [nom de l'entreprise]. Conformément à la loi « informatique et
          libertés » du 6 janvier 1978, vous bénéficiez d'un droit d'accès, de
          rectification et d'opposition aux informations qui vous concernent. Si
          vous souhaitez exercer ce droit, veuillez nous contacter à l'adresse
          suivante : [Adresse email], ou par courrier à [Adresse postale], en
          nous indiquant vos nom, prénom, adresse et email.
        </p>
      </section>

      <section>
        <h2>Droit d'auteur</h2>
        <p>
          L'ensemble de ce site relève de la législation française et
          internationale sur le droit d'auteur et la propriété intellectuelle.
          Tous les droits de reproduction sont réservés, y compris pour les
          documents téléchargeables et les représentations iconographiques et
          photographiques.
        </p>
      </section>
    </div>
  );
};

export default Mentions;
