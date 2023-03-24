import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import RoutePage from './components/routes/routePages/routePage'

import MenuNavegation from "./components/routes/navbar/menuNavegation";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <MenuNavegation />
        <RoutePage/>
      </HashRouter>
    </div>
  );
}

export default App;
