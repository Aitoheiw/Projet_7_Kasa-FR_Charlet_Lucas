import PropTypes from "prop-types";
/**
 * Componente pour afficher une fl che de navigation vers la droite dans le carrousel
 *
 * @param {function} handleNextSlide fonction  appeler lorsque l'utilisateur clique sur la fl che
 * @returns un  l ment JSX qui affiche la fl che vers la droite
 */

export default function ArrowRight({ handleNextSlide }) {
  return (
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
  );
}
ArrowRight.propTypes = {
  handleNextSlide: PropTypes.func.isRequired, // fonction obligatoire
};
