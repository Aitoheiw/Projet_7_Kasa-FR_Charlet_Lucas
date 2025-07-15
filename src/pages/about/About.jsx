import TitleCard from "../../components/titleCard/TitleCard";
import Dropdown from "../../components/dropdown/Dropdown";
import "./about.scss";

/**
 * The About component renders the About page of the application.
 * It displays a TitleCard at the top and four dropdown menus below it.
 * The dropdown menus contain text that explains the values of Kasa.
 */
export default function About() {
  return (
    <>
      <div className="main-about">
        <TitleCard id="about" title1="" title2="" classname="overlay-about" />
        <section className="drop-down-container">
          <Dropdown
            titre="Fiabilité"
            text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes. "
          />
          <Dropdown
            titre="Respect"
            text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Dropdown
            titre="Service"
            text="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance. "
          />
          <Dropdown
            titre="Sécurité"
            text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </section>
      </div>
    </>
  );
}
