import { NavLink } from "react-router-dom";
import "./listAnime.css";
import ListAnimeLogic from "./ListAnimeLogic";

function ListAnime() {
  const {
    filterSearch,
    currentPage,
    totalPages,
    filteredSearch,
    prev,
    next,
    handleSubmit,
  } = ListAnimeLogic();

  return (
    <div className="boxListAnime">
      <form className="boxFormLsearch" onSubmit={(e) => handleSubmit}>
        <input type="text" onChange={filterSearch} />
        <section>
          <button onClick={prev}>Prev</button>
          <button onClick={next}>Next</button>
        </section>
        <span>
          {currentPage}/{totalPages}:Pages
        </span>
      </form>
      <div className="boxSearchAnime">
        {filteredSearch.map((items) => {
          return (
            <NavLink
              to={`/${items._id}`}
              key={items._id}
              className="boxListSearch"
            >
              <img src={items.img} alt={items.title} />
              <section>{items.title}</section>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default ListAnime;
