import PropTypes from "prop-types";
export default function ArrowLeft({ handlePrevSlide }) {
  return (
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
  );
}
ArrowLeft.propTypes = {
  handleNextSlide: PropTypes.func.isRequired, //fonction obligatoire
};
