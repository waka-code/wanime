import React from "react";
import { NavLink } from "react-router-dom";
import { ChildProps } from "../InterfaceHome";

function ListImag(props: ChildProps) {
  return (
    <article className="boxImg">
      {props.dataName.map((items) => {
        return (
          <NavLink to={`/${items._id}`} key={items._id} className="boxImgTitle">
            <span>{items.title}</span>
            <img src={items.img} alt={items.title} id="imgBox" />
          </NavLink>
        );
      })}
    </article>
  );
}

export default ListImag;
