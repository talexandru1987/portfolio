import { useState } from "react";

import "./App.css";

import { NavBar } from "./components/NavBar";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";

export const App = () => {
  const [currentPage, setCurrentPage] = useState("aboutMe");

  return (
    <div className="app-container">
      <NavBar setCurrentPage={setCurrentPage} />
      <Content currentPage={currentPage} />
      <Footer />
    </div>
  );
};
