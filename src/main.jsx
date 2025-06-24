import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter basename="/Projet_7_Kasa-FR_Charlet_Lucas">
    <App />
  </BrowserRouter>
);
