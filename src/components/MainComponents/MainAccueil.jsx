import CardsLogements from "./CardsLogements";
import TitleCard from "./TitleCard";

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
