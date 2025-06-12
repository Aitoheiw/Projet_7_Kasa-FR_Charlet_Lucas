import Footer from "../components/Footer/Footer";
import Header from "../components/HeaderComponents/Header";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <Header />
      <div className="error-container">
        <h1>404</h1>
        <div className="error-text-container">
          <p>Oups! La page que </p>
          <p>vous demandez n'existe pas</p>
        </div>

        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
      <Footer />
    </div>
  );
}
