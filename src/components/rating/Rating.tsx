import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";

// Typage des props
interface RatingProps {
  rating: number; // nombre d'étoiles entre 0 et 5
}

export default function Rating({ rating }: RatingProps) {
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
