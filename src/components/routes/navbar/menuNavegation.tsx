import React from "react";
import logo from "../..//../img/logo.png";
import { FcSearch } from "react-icons/fc";
import "./menuNavegation.css";
import { NavLink } from "react-router-dom";

function menuNavegation() {
  return (
    <nav className="menuuNavegation">
      <div className="boxLogo">
        <img src={logo} alt="logo" />
        <h3>animeJK</h3>
      </div>
      <div className="boxSearch">
        <ul className="boxMenuUl">
          <NavLink to="/*" className="li">
            HOME
          </NavLink>
          <NavLink to="/list" className="li">
            LIST ANIME
          </NavLink>
        </ul>

        <div className="boxMenuInput">
          <section>
            <input type="text" />
            <FcSearch className="icono" />
          </section>

          <button className="menuBtn">
            <NavLink to="/login" className="li">
              LOGIN
            </NavLink>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default menuNavegation;
