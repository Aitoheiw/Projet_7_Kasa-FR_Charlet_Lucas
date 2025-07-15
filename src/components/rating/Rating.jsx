import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";

/**
 * Affiche un syst me d' valuation sous forme d' toiles remplies ou vides
 * @param {number} rating - Le nombre d' toiles remplies (entre 0 et 5)
 * @returns Un composant React affichant le syst me d' valuation
 */
/**
 * @example
 * import Rating from "./Rating";
 *
 * <Rating rating={3} /> // Affiche 3 toiles remplies et 2 vides
 */
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
