import { Routes, Route } from "react-router-dom";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Logements from "./pages/logements/Logements";
import Error from "./pages/error/Error";
import "./Style/Css/Main.css";
import Nav from "./components/headerComponents/nav/Nav";
import HeaderLogo from "./components/HeaderComponents/headerLogo/HeaderLogo";

function App() {
  return (
    <div className="App">
      <Header>
        <HeaderLogo />
        <Nav />
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logements />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
