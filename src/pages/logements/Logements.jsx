import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Carrousel from "../../components/carrousel/Carrousel";
import Dropdown from "../../components/dropdown/Dropdown";
import Rating from "../../components/rating/Rating";
import "./logement.scss";

export default function Logements() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLogement = async () => {
      try {
        const response = await fetch(`/data/data.json`);
        const data = await response.json();
        const logementTrouvé = data.find((logement) => logement.id === id);
        if (!logementTrouvé) {
          // Si le logement n'est pas trouvé, redirige vers la page d'erreur
          navigate("*");
          return;
        } else {
          setLogement(logementTrouvé);
        }
      } catch (error) {
        console.error("Erreur lors du fetch :", error);
      }
    };
    fetchLogement();
    console.log(logement);
  }, [id]);

  if (!logement) {
    return <Link to="*" element={<Error />} />;
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
