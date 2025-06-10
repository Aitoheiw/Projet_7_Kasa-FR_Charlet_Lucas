import { useEffect, useState } from "react";

export default function Carrousel({ id }) {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    console.log(logement);
  }, [id]);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % logement.pictures.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + logement.pictures.length) % logement.pictures.length
    );
  };

  if (!logement) {
    return null;
  }

  return (
    <section className="carrousel-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        className="carrousel-arrow-left carrousel-arrow"
        onClick={handlePrevSlide}
      >
        <path
          d="M17.51 4.75064L15.74 2.98064L5.83995 12.8806L15.7399 22.7806L17.5099 21.0106L9.37995 12.8806L17.51 4.75064Z"
          fill="white"
        />
        <defs>
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(24 24.8806) rotate(-180)"
          />
        </defs>
      </svg>
      <img
        src={logement.pictures[currentSlide]}
        alt=""
        className="carrousel-img"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        className="carrousel-arrow-right carrousel-arrow"
        onClick={handleNextSlide}
      >
        <path
          d="M6.48999 21.0106L8.25999 22.7806L18.16 12.8806L8.25999 2.98059L6.48999 4.75059L14.62 12.8806L6.48999 21.0106Z"
          fill="white"
        />
        <defs>
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.880615)"
          />
        </defs>
      </svg>
    </section>
  );
}
