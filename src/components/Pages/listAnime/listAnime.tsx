import { NavLink } from "react-router-dom";
import NotFound from "../NotFound";
import "./listAnime.css";
import ListAnimeLogic from "./useListAnimeLogic";

function ListAnime() {
  const {
    filterSearch,
    currentPage,
    totalPages,
    filterByAnimeName,
    prev,
    next,
    handleSubmit,
  } = ListAnimeLogic();

  return (
    <div className="box_list_anime">
      <form className="box_form_search" onSubmit={(e) => handleSubmit}>
        <input type="text" onChange={filterSearch} />
        <section>
          <button onClick={prev}>Prev</button>
          <button onClick={next}>Next</button>
        </section>
        <span>
          {currentPage}/{totalPages}{totalPages > 1 ? " Pages" : "Page"}
        </span>
      </form>
      <div className="box_search_anime">
        {filterByAnimeName.length === 0 ? (
         <NotFound />
        ) : (
          filterByAnimeName.map((items) => {
            return (
              <NavLink
                to={`/${items._id}`}
                key={items._id}
                className="box_list_search"
              >
                <img src={items.img} alt={items.title} />
                <section>{items.title}</section>
              </NavLink>
            );
          })
        )}
      </div>
    </div>
  );
}

export default ListAnime;
