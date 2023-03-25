import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import RoutePage from './components/routes/routePages/routePage'
import MenuNavegation from "./components/routes/navbar/menuNavegation";
import Footer from "./components/Pages/footer/footer"

function App() {
  return (
    <div className="App">
      <HashRouter>
        <MenuNavegation />
        <RoutePage/>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
