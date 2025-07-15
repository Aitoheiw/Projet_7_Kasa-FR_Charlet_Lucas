import TitleCard from "../../components/titleCard/TitleCard";
import CardsLogements from "../../layout/cardsLogement/CardsLogements";
import "./home.scss";

/**
 * Affiche la page d'accueil
 *
 * Cette page affiche le titre principal de l'application
 * ainsi que les cartes des logements
 *
 * @returns {JSX.Element}
 */
export default function Home() {
  return (
    <main className="main-accueil">
      <TitleCard
        id="home"
        title1="Chez vous,"
        title2="partout et ailleurs"
        classname="overlay-home"
      />
      <CardsLogements />
    </main>
  );
}
