import TitleCard from "../../components/titleCard/TitleCard";
import CardsLogements from "../../components/cardsLogement/CardsLogements";
import "./home.scss";

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
