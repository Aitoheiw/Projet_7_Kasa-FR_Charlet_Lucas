import { NavLink } from "react-router-dom";
import "./nav.scss";
/**
 * Composant de navigation principal
 *
 * Affiche les liens de navigation dans le header
 *
 * @returns {ReactElement} Le composant de navigation
 */
export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            ACCUEIL
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            A PROPOS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
