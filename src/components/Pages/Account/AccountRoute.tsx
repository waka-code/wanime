import { NavLink } from "react-router-dom";
import AccountLogic from "./useAccountLogic";
import ListAnimeLogic from "../listAnime/useListAnimeLogic";

export default function AccountRoute() {
  const { LogoutButton } = AccountLogic();
  const { filterByAnimeName, prev, next } =
    ListAnimeLogic();
  return (
    <div className="box_acount_route">
      <section className="box_nav_account">
        CONTROL PANEL
        <NavLink className="nav_account" to="/HomeUser/GetAnime">
          List of Anime
        </NavLink>
        <NavLink className="nav_account" to="/HomeUser/Post">
          Add New Anime
        </NavLink>
        <button onClick={LogoutButton}>Sign off</button>
      </section>
      <section className="box_info_date">
        {
          filterByAnimeName.map(items =>{
            return <div className="box_date" key={items._id}>
              <span>{items.title}</span>
              <span>{items.date}</span>
            </div>
          })
        }
         <section className="box_btn">
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </section>
      </section>
    
    </div>
  );
}
