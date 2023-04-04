import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import MenuNavegation from "./components/routes/navbar/MenuNavegation";
import RoutePage from "./components/routes/routePages/RoutePage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <MenuNavegation />
        <RoutePage />
      </HashRouter>

    </div>
  );
}

export default App;
