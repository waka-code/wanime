import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { apiUrlData } from "../../../Apis/apis";
import { IObject } from "../../Interface/interface";
import { Events } from "../Login/types/types";
import Animesearch from "./animesearch/Animesearch";
import "./listAnime.css";

function ListAnime() {
  const [Search, setSearch] = useState<IObject[]>([]);
  const [filteredSearch, setFilteredSearch] = useState<IObject[]>([]);
  const [view, setView] = useState<boolean>(false)

  const viewSearch = ()=>{
    setView(!view)
  }

  const searchData = async () => {
    const res = await axios.get(`${apiUrlData}`);
    setSearch(res.data.docs);
    setFilteredSearch(res.data.docs);
  };

  const filterSearch = (e: Events) => {
    const data = e.target.value;
    e.preventDefault();
    const filterData = Search.filter((dataSearch) =>
      dataSearch.title.toLowerCase().includes(data)
    );
    setFilteredSearch(filterData);
  };

  useEffect(() => {
    searchData();
  }, []);

  return (
    <div className="boxListAnime">
      <form className="boxFormLsearch">
        <input type="text" onChange={filterSearch} />
        <section>
          <button onClick={viewSearch}>Next</button>
          <button>Prev</button>
        </section>
      </form>
      <div className="boxSearchAnime">
        {filteredSearch.map((items) => {
          return (
            <NavLink to={`/${items._id}`} className="boxListSearch">
              <img src={items.img} alt={items.title} />
              <section>{items.title}</section>
            </NavLink>
          );
        })}
      </div>
      <Animesearch filteredSearch={filteredSearch}/>
    </div>
  );
}

export default ListAnime;
