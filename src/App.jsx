import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Logements from "./pages/Logements";
import Error from "./pages/Error";
import "./Style/Css/Main.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Logements />} />
      <Route path="*" element={<Error />} />
      <Route path="/error" element={<Error />} />
    </Routes>
  );
}

export default App;
