import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Logements() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

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
  }, [id]);
  if (!logement) {
    return <Link to="/error" />;
  }

  return (
    <div>
      <h1>{logement.title}</h1>
    </div>
  );
}
