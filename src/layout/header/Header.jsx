import PropTypes from "prop-types";
import { Children } from "react";
import "./header.scss";

export default function Header({ children }) {
  return <header>{children}</header>;
}
Header.propTypes = {
  children: PropTypes.node.isRequired, // Un ou plusieurs éléments React à afficher dans <header>
};
