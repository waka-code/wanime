import React from "react";
import { NavLink } from "react-router-dom";
import { ChildIsAnimes } from "../InterfaceHome";

export default function ListNameAnime(props: ChildIsAnimes) {
  return (
    <div className="list_title">
      {props.animeData.map((items) => {
        return (
          <NavLink to={`/${items._id}`} className="title_anime" key={items._id}>
            <p>{items.title}</p>
            <br />
          </NavLink>
        );
      })}
    </div>
  );
}
