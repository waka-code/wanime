import React from "react";
import { NavLink } from "react-router-dom";
import { ChildProps } from "../InterfaceHome";

function ListNameAnime(props: ChildProps) {
  return (
    <div className="listTitle">
      {props.dataName.map((items) => {
        return (
          <NavLink to={`/${items._id}`} className="titleName" key={items._id}>
            <p>{items.title}</p>
            <br />
          </NavLink>
        );
      })}
    </div>
  );
}

export default ListNameAnime;
