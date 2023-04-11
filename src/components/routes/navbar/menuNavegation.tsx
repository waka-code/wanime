import logo from "../..//../img/logo.png";
import { FcSearch } from "react-icons/fc";
import "./menuNavegation.css";
import { NavLink } from "react-router-dom";
import IsVisible from "./useIsVisible";
import { MdOnlinePrediction } from "react-icons/md";
import {NotFound} from "../../Pages/NotFound";
import LoginLogic from "../../Pages/RegistrationAndLoginData/Login/useLoginLogic";

function MenuNavegation() {
  const {
    setInputValue,
    inputValue,
    showComponent,
    handleInputChange,
    datas,
    setShowComponent,
    handleKeyDonw,
  } = IsVisible();

  const { isOnline } = LoginLogic();

  return (
    <nav
      className="menu_navegation"
      onClick={() => {
        setShowComponent(false);
        setInputValue("");
      }}
    >
      <div className="box_logo">
        <img src={logo} alt="logo" />
        <h3>animeJK</h3>
      </div>
      <div className={`${isOnline ? "box_searchs" : "box_search"}`}>
        <ul className="box_menu_ul">
          <NavLink to="/home" className="li">
            HOME
          </NavLink>
          <NavLink to="/list" className="li">
            LIST ANIME
          </NavLink>
          {isOnline ? (
            <NavLink to="/HomeUser" className="li">
              CONTROL PANEL
            </NavLink>
          ) : null}
        </ul>

        <div className="box_menu_input">
          <section>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDonw}
              required
            />
            <FcSearch className="icono" />
          </section>
          {isOnline ? (
            <span className="menu_icons">
              {" "}
              <MdOnlinePrediction className="icon" /> online
            </span>
          ) : (
            <button className="menu_btn">
              <NavLink to="/login" className="li">
                LOGIN
              </NavLink>
            </button>
          )}
        </div>
      </div>
      {showComponent && (
        <div className="box_search_anime_by_name">
          {datas.length === 0 ? (
            <NotFound />
          ) : (
            datas.map((items) => {
              return (
                <NavLink
                  to={`/${items._id}`}
                  key={items._id}
                  className="box_show_component"
                  onClick={() => {
                    setShowComponent(false);
                    setInputValue("");
                  }}
                >
                  <section>{items.title}</section>
                </NavLink>
              );
            })
          )}
        </div>
      )}
    </nav>
  );
}

export default MenuNavegation;
