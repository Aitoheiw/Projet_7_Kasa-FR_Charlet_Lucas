import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Carrousel from "../../components/carrousel/Carrousel";
import Dropdown from "../../components/dropdown/Dropdown";
import Rating from "../../components/rating/Rating";
import "./logement.scss";

interface Logement {
  id: string;
  title: string;
  location: string;
  pictures: string[];
  tags: string[];
  description: string;
  rating: number;
  host: {
    name: string;
    picture: string;
  };
  equipments: string[];
}

export default function Logements() {
  const { id } = useParams<{ id: string }>();
  const [logement, setLogement] = useState<Logement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLogement = async () => {
      try {
        const response = await fetch(`/data/data.json`);
        const data: Logement[] = await response.json();
        const logementTrouvé = data.find((l) => l.id === id);
        if (!logementTrouvé) {
          navigate("*");
        } else {
          setLogement(logementTrouvé);
        }
      } catch (error) {
        console.error("Erreur lors du fetch :", error);
      }
    };
    fetchLogement();
  }, [id, navigate]);

  if (!logement) {
    return <p>Chargement...</p>;
  }

  return (
    <main className="main-logements">
      <Carrousel logementImg={logement.pictures} />
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
            list={logement.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          />
        </div>
      </section>
    </main>
  );
}
