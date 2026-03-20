import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")).render(
  <div className="card">
    <Header />
    <Content />
    <Footer />
  </div>
);