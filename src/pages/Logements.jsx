import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/HeaderComponents/Header";
import Footer from "../components/Footer/Footer";
import Carrousel from "../components/Carrousel/Carrousel";
import Dropdown from "../components/Dropdown/Dropdown";

export default function Logements() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLogement = async () => {
      try {
        const response = await fetch(`/data/data.json`);
        const data = await response.json();
        const logementTrouvé = data.find((logement) => logement.id === id);
        setLogement(logementTrouvé);
      } catch (error) {
        console.error("Erreur lors du fetch :", error);
      }
    };
    fetchLogement();
    console.log(logement);
  }, [id]);

  // useEffect(() => {
  //   if (isLoading) {
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 300);
  //   }
  // }, [isLoading]);

  if (!logement) {
    return <Link to="/error" />;
  }

  return (
    <div className={`logement-container`}>
      <Header />
      <main className="main-logements">
        <Carrousel id={id} />
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
              <div className="host-rating">{logement.rating} / 5</div>
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
      <Footer />
    </div>
  );
}
