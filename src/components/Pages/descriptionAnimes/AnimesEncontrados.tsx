import React, { useEffect } from "react";
import IsVisible from "../../routes/navbar/useIsVisible";
import "./DescriptionAnimes.css";
import { NavLink, useLocation } from "react-router-dom";

export default function AnimesEncontrados() {
  const { foundData, setFoundData } = IsVisible();
  const history = useLocation();

  useEffect(() => {
    if (history.state?.data) {
      setFoundData(history.state.data);
    }
  }, [history.state, setFoundData]);

  return (
    <div className="box_found">
      <span>Found</span>
      <div className="box_animes_found">
        {foundData.map((data) => {
          return (
            <div key={data._id}>
              <NavLink to={`${data._id}`} className="animes_found">
                <img src={data.img} alt={data.title} />
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}
