import PropTypes from "prop-types";
import "./titleCard.scss";
export default function TitleCard({ id, title1, title2, classname }) {
  return (
    <section className="title-card" id={id}>
      <div className={classname}></div>
      <div className="content">
        <h1>{title1}</h1>
        <h2>{title2}</h2>
      </div>
    </section>
  );
}
TitleCard.propTypes = {
  id: PropTypes.string.isRequired, // utilisé comme identifiant HTML
  title1: PropTypes.string.isRequired, // premier titre affiché (peut être vide mais requis)
  title2: PropTypes.string.isRequired, // deuxième titre affiché
  classname: PropTypes.string, // classe CSS pour le style de l'overlay
};
