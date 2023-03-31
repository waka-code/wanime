import React from "react";
import ListAnimeLogic from "../../../listAnime/ListAnimeLogic";
import "./ViewAnime.css";
function ViewAnime() {
  const { currentPage, totalPages, filteredSearch, prev, next } =
    ListAnimeLogic();
  return (
    <div className="boxViewAnime">
      <div className="newAnime">
        {filteredSearch.map((items) => {
          return (
            <div className="boxAnime">
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
                <button>Delete</button>
                <button>Update</button>
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
