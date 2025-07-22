import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLogementById } from "../../apiServices";
import Carrousel from "../../components/carrousel/Carrousel";
import Dropdown from "../../components/dropdown/Dropdown";
import Rating from "../../components/rating/Rating";
import "./logement.scss";

/**
 * Affiche le logement correspondant à l'identifiant donné.
 *
 * La page est divisée en 3 parties :
 * - Un carrousel affichant les photos du logement.
 * - Un en-tête contenant le titre du logement, sa localisation et ses tags.
 * - Une section contenant :
 *   - Les informations sur le propriétaire du logement, son nom, son
 *     prénom, sa photo et sa note.
 *   - Un dropdown affichant la description du logement.
 *   - Un dropdown affichant les équipements du logement.
 *
 * @returns {JSX.Element} La page de détail d'un logement.
 */
export default function Logements() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const logementData = await getLogementById(id);
        if (!logementData) {
          // Le logement n'existe pas → erreur personnalisée
          navigate("*");
          return;
        }
        setLogement(logementData);
      } catch (error) {
        console.error(error);
        // Si erreur API, on redirige
        navigate("*");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, navigate]);

  if (loading) {
    return <div className="loader">Chargement du logement…</div>;
  }

  // Si logement non trouvé, le navigate aura déjà redirigé !
  if (!logement) {
    return null;
  }

  return (
    <>
      <main className="main-logements">
        <Carrousel id={id} logementImg={logement.pictures} />
        <section>
          <div className="logement-content">
            <div className="logement-head">
              <h1 className="logement-title">{logement.title}</h1>
              <p className="logement-location">{logement.location}</p>
              <div className="tags-container">
                {logement.tags.map((tag, index) => (
                  <span className="tag" key={index}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="host-container">
              <Rating rating={logement.rating} />
              <div className="host">
                <img src={logement.host.picture} alt={logement.host.name} />
                <h3>{logement.host.name}</h3>
              </div>
            </div>
          </div>
          <div className="logement-dropdown-container">
            <Dropdown titre="Description" text={logement.description} />
            <Dropdown
              id="equipements"
              titre="Equipements"
              text=""
              list={logement.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            />
          </div>
        </section>
      </main>
    </>
  );
}
