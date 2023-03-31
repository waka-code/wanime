import logo from "../..//../img/logo.png";
import { FcSearch } from "react-icons/fc";
import "./menuNavegation.css";
import { NavLink } from "react-router-dom";
import IsVisible from "./IsVisible";
import { MdOnlinePrediction } from "react-icons/md";

function MenuNavegation() {
  const { showComponent, handleInputChange, datass, setShowComponent, token } =
    IsVisible();

  return (
    <nav className="menuuNavegation" onClick={() => setShowComponent(false)}>
      <div className="boxLogo">
        <img src={logo} alt="logo" />
        <h3>animeJK</h3>
      </div>
      <div className={`${token ? "boxSearchs" : "boxSearch"}`}>
        <ul className="boxMenuUl">
          <NavLink to="/home" className="li">
            HOME
          </NavLink>
          <NavLink to="/list" className="li">
            LIST ANIME
          </NavLink>
          {token ? (
            <NavLink to="/HomeUser" className="li">
              ACCOUNT
            </NavLink>
          ) : null}
        </ul>

        <div className="boxMenuInput">
          <section>
            <input type="text" onChange={handleInputChange} />
            <FcSearch className="icono" />
          </section>
          {token ? (
            <span className="menuicons">
              {" "}
              <MdOnlinePrediction className="icon" /> online
            </span>
          ) : (
            <button className="menuBtn">
              <NavLink to="/login" className="li">
                LOGIN
              </NavLink>
            </button>
          )}
        </div>
      </div>
      {showComponent && (
        <div className="boxSearchAnimeByNAme">
          {datass.map((items) => {
            return (
              <NavLink
                to={`/${items._id}`}
                key={items._id}
                className="boxShowComponent"
              >
                <section>{items.title}</section>
              </NavLink>
            );
          })}
        </div>
      )}
    </nav>
  );
}

export default MenuNavegation;
