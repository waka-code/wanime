import React from "react";
import { NavLink } from "react-router-dom";
import { ChildIsAnime } from "../InterfaceHome";

function ListImag(props: ChildIsAnime) {
  return (
    <article className="box_img">
      {props.dataName.map((items) => {
        return (
          <NavLink to={`/${items._id}`} key={items._id} className="box_img_title">
            <span>{items.title}</span>
            <img src={items.img} alt={items.title} id="img_box" />
          </NavLink>
        );
      })}
    </article>
  );
}

export default ListImag;
