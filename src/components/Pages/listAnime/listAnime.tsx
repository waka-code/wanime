import { NavLink } from "react-router-dom";
import { NotFound } from "../NotFound";
import "./listAnime.css";
import ListAnimeLogic from "./useListAnimeLogic";

function ListAnime() {
  const {
    currentPage,
    totalPages,
    filterByAnimeName,
    prev,
    next,
    handleSubmit,
    selectedGenre,
    handleGenreChange,
  } = ListAnimeLogic();

  return (
    <div className="box_list_anime">
      <form className="box_form_search" onSubmit={(e) => handleSubmit}>
        {/*<input type="text" onChange={filterSearch} onKeyDown={handleKeyDonw}/>*/}
        <article className="list_and_dropdonw">
          <select value={selectedGenre} onChange={handleGenreChange}>
            <option value="">Gender</option>
            <option value="Shonen">Shonen</option>
            <option value="Misterio">Misterio</option>
            <option value="Sobrenatural">Sobrenatural</option>
          </select>
        </article>
        <section>
          <button onClick={prev}>Prev</button>
          <button onClick={next}>Next</button>
        </section>
        <span>
          {currentPage}/{totalPages}
          {totalPages > 1 ? " Pages" : "Page"}
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
