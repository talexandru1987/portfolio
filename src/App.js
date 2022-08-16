import { useState } from "react";

import "./App.css";

import { NavBar } from "./components/NavBar";
import { Content } from "./components/Content";

export const App = () => {
  return (
    <div className="app-container">
      <NavBar />
      <Content />
    </div>
  );
};
