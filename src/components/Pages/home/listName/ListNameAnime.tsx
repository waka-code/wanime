import React from "react";
import { NavLink } from "react-router-dom";
import { ChildIsAnime } from "../InterfaceHome";

export default function ListNameAnime(props: ChildIsAnime) {
  return (
    <div className="list_title">
      {props.dataName.map((items) => {
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
