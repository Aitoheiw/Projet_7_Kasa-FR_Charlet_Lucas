import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";

export default function Rating({ rating }) {
  const totalStars = 5;
  return (
    <div className="host-rating">
      {[...Array(totalStars)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={fullStar}
          className={`star-icon ${
            index < rating ? "star-filled" : "star-empty"
          }`}
        />
      ))}
    </div>
  );
}
Rating.propTypes = {
  rating: PropTypes.number.isRequired, // Le nombre d’étoiles (0 à 5)
};
