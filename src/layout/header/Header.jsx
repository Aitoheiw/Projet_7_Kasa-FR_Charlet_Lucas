import PropTypes from "prop-types";
import { Children } from "react";
import "./header.scss";

/**
 * Componente qui représente l'en-tete du site
 *
 * @param {React.ReactNode} children Un ou plusieurs éléments React à afficher dans <header>
 * @returns {React.ReactElement} Un élément JSX qui affiche l'en-t te du site
 */
export default function Header({ children }) {
  return <header>{children}</header>;
}
Header.propTypes = {
  children: PropTypes.node.isRequired, // Un ou plusieurs éléments React à afficher dans <header>
};
