import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./cardsLogements.scss";
export default function CardsLogements() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.BASE_URL}data/data.json`
        );
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Erreur lors du fetch :", error);
      }
    };
    fetchCards();
  }, []);

  return (
    <section className="cards-container">
      {cards.map((logement) => {
        return (
          <Link to={`/logement/${logement.id}`} key={logement.id}>
            <div className="cards-logements">
              <div className="overlay"></div>
              <img
                src={logement.cover}
                alt={logement.title}
                className="cards-img"
              />
              <h2 className="cards-title">{logement.title}</h2>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
