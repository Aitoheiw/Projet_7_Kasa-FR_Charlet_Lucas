import { useState } from "react";
import "./carrousel.scss";

export default function Carrousel({ logementImg }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % logementImg.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + logementImg.length) % logementImg.length
    );
  };

  function Arrows({ logementImg }) {
    if (!logementImg || logementImg.length <= 1) return null;

    return (
      <>
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
        </svg>

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
        </svg>
      </>
    );
  }

  if (!logementImg) {
    return null;
  }

  return (
    <section className="carrousel-container">
      <Arrows logementImg={logementImg} />
      <img src={logementImg[currentSlide]} alt="" className="carrousel-img" />
      <p className="slide-count">
        {currentSlide + 1} / {logementImg.length}
      </p>
    </section>
  );
}
