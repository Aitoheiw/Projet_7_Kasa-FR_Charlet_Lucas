import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./dropdown.scss";
/**
 * A dropdown component that displays a title and can be toggled open to reveal
 * a list of items and a piece of text. The component has a CSS animation that
 * plays when the dropdown is opened or closed.
 *
 * @prop {string} titre - The title displayed above the dropdown.
 * @prop {string} text - The text displayed below the list of items in the
 *   dropdown.
 * @prop {React.ReactNode} list - The list of items displayed in the dropdown.
 * @prop {string} id - The HTML id attribute for the dropdown content.
 */

export default function Dropdown({ titre, text, list, id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [animationState, setAnimationState] = useState("closed");

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      setTimeout(() => {
        setAnimationState("opened");
      }, 50);
    } else {
      setAnimationState("closing");
      setTimeout(() => {
        setIsMounted(false);
      }, 300);
    }
  }, [isOpen, isMounted]);

  return (
    <div className="container">
      <div className="dropdown-container">
        <h3>{titre}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          onClick={() => setIsOpen(!isOpen)}
          className={`dropdown-icon ${isOpen ? "rotated" : ""}`}
        >
          <path
            d="M14.7897 10.7897C15.4591 10.1202 16.5462 10.1202 17.2157 10.7897L27.4979 21.0719C28.1674 21.7414 28.1674 22.8285 27.4979 23.4979C26.8285 24.1673 25.7414 24.1673 25.072 23.4979L16 14.4259L6.92804 23.4926C6.25862 24.162 5.17148 24.162 4.50206 23.4926C3.83265 22.8231 3.83265 21.736 4.50206 21.0666L14.7843 10.7843L14.7897 10.7897Z"
            fill="white"
          />
        </svg>
      </div>
      {isMounted && (
        <div className="dropdown-content-mask">
          <div className={`dropdown-content ${animationState}`} id={id}>
            <ul className="dropdown-list">{list}</ul>
            <p className="dropdown-text">{text}</p>
          </div>
        </div>
      )}
    </div>
  );
}
Dropdown.propTypes = {
  titre: PropTypes.string.isRequired, // titre affiché en haut
  text: PropTypes.string, // texte facultatif sous la liste
  list: PropTypes.node.isRequired, // élément React (souvent une liste <li>)
  id: PropTypes.string, // utilisé comme identifiant HTML
};
