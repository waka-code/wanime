import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { apiUrlData } from "../../../Apis/apis";
import { IObject } from "../../Interface/interface";
import "./listAnime.css";

function ListAnime() {
  const [Search, setSearch] = useState<IObject[]>([]);

  const searchData = async () => {
    const res = await axios.get(apiUrlData);
    setSearch(res.data);
  };

  const filterSearch = (data: string) => {
    const filterData = Search.filter((dataSearch) =>
      dataSearch.title.includes(data)
    );
    setSearch(filterData);
  };

  useEffect(() => {
    searchData();
  }, []);

  return (
    <div className="boxListAnime">
      <form className="boxFormLsearch">
        <input
          type="text"
          onChange={(e) => filterSearch(e.target.value)}
          placeholder="Name"
        />
      </form>
      <div className="boxSearchAnime">
        {Search.map((items) => {
          return (
            <NavLink to={`/${items._id}`}>
            <div className="boxListSearch">
              <img src={items.img} alt={items.title} />
              <section>{items.title}</section>
            </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default ListAnime;
