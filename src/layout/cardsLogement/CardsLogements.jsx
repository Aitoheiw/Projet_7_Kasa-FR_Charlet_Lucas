import { Link } from "react-router-dom";
import { useAllLogements } from "../../hook/cardsLogementsHook/useAllLogements";
import "./cardsLogements.scss";
/**
 * Affiche une liste de logements sous forme de cartes
 *
 * Les cartes sont générées en fonction des données
 * contenues dans le fichier JSON /data/data.json
 *
 * Chaque carte comprend une image, un titre et un lien
 * vers la page de détail du logement
 *
 * @returns {JSX.Element}
 */
export default function CardsLogements() {
  const { data: cards, loading, error } = useAllLogements();

  if (loading) {
    // On affiche un loader ou un message d’attente
    return <div className="loader">Chargement des logements…</div>;
  }

  if (error) {
    // On affiche un message d’erreur personnalisé
    return (
      <div className="error-message">
        Oups, une erreur est survenue :<br />
        <span style={{ color: "#D33" }}>{error}</span>
      </div>
    );
  }

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
