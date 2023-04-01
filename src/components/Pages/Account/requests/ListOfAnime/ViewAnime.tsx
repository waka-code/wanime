import React from "react";
import { NavLink } from "react-router-dom";
import ListAnimeLogic from "../../../listAnime/ListAnimeLogic";
import UpdateAnimeLogic from "../UpdateAnime/UpdateAnimeLogic";
import "./ViewAnime.css";
import ViewAnimeLogic from "./ViewAnimeLogic";
function ViewAnime() {
  const { currentPage, totalPages, filteredSearch, prev, next } =
    ListAnimeLogic();

  const { captureId } = UpdateAnimeLogic();
  const { handleSubmit } = ViewAnimeLogic();

  return (
    <div className="boxViewAnime">
      <div className="newAnime">
        {filteredSearch.map((items, idx) => {
          return (
            <div className="boxAnime" key={items._id}>
              <section className="viewAnimeImg">
                <img src={items.img} alt={items.title} />
              </section>
              <section className="viewAnimeTxt">
                <span>{items.title}</span>
                <br />
                <span>{items.gender}</span>
                <br />
                <p>{items.description}</p>
              </section>
              <section className="boxBrn">
                <button onClick={() => handleSubmit(items._id)}>Delete</button>
                <NavLink to="/HomeUser/Update" className="BoxUpdate">
                  <button onClick={() => captureId(items._id)}>Update</button>
                </NavLink>
              </section>
            </div>
          );
        })}
      </div>
      <section className="boxBrn">
        <button onClick={prev}>Prev</button>
        <span>{currentPage / totalPages}</span>
        <button onClick={next}>Next</button>
      </section>
    </div>
  );
}

export default ViewAnime;
