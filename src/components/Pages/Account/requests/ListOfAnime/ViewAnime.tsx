import React from "react";
import { NavLink } from "react-router-dom";
import ListAnimeLogic from "../../../listAnime/useListAnimeLogic";
import UpdateAnimeLogic from "../UpdateAnime/useUpdateAnimeLogic";
import "./ViewAnime.css";
import ViewAnimeLogic from "./useViewAnimeLogic";
function ViewAnime() {
  const { filterByAnimeName, prev, next } = ListAnimeLogic();

  const { captureId } = UpdateAnimeLogic();
  const { handleSubmit } = ViewAnimeLogic();

  return (
    <div className="box_view_anime">
      <div className="new_anime">
        {filterByAnimeName.map((items, idx) => {
          return (
            <div className="box_anime" key={items._id}>
              <section className="view_anime_img">
                <img src={items.img} alt={items.title} />
              </section>
              <section className="view_anime_txt">
                <span>{items.title}</span>
                <br />
                <span>{items.gender}</span>
                <br />
                <p>{items.description}</p>
              </section>
              <section className="box_btn">
                <button
                  onClick={() => {
                    handleSubmit(items._id);
                  }}
                >
                  Delete
                </button>
                <NavLink to="/HomeUser/Update" className="box_update">
                  <button onClick={() => captureId(items._id)}>Update</button>
                </NavLink>
              </section>
            </div>
          );
        })}
      </div>
      <section className="box_btn">
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </section>
    </div>
  );
}

export default ViewAnime;
