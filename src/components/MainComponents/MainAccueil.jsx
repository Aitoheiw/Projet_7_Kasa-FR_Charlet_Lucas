import CardsLogements from "./cardsLogement/CardsLogements";
import TitleCard from "./titleCard/TitleCard";

export default function Main() {
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
