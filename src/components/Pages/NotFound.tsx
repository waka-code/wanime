import React from "react";
import "../../App.css";
import { NavLink } from "react-router-dom";

export function NotFound() {
  

  return (
    <div className="not_found">
      Oops! <br /> <span>Not Found...</span>
    </div>
  );
}

export function NotFoundPage() {
  return (
    <div className="page_not_found">
      Oops! <span>Page not found...</span>
      <NavLink to="/home" className="return">click to return</NavLink>
    </div>
  );
}