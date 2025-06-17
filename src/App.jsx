import { Routes, Route } from "react-router-dom";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Logements from "./pages/Logements";
import Error from "./pages/Error";
import "./Style/Css/Main.css";
import Nav from "./components/HeaderComponents/nav/Nav";
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
        <Route path="/error" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
