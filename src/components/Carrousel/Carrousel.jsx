import { useState } from "react";
import PropTypes from "prop-types";
import "./carrousel.scss";
import ArrowLeft from "./arrowLeft/ArrowLeft";
import ArrowRight from "./arrowRight/ArrowRight";

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
        <ArrowLeft handlePrevSlide={handlePrevSlide} />
        <ArrowRight handleNextSlide={handleNextSlide} />
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
Carrousel.propTypes = {
  logementImg: PropTypes.arrayOf(PropTypes.string).isRequired,
};
