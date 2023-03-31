import { NavLink } from "react-router-dom";
import AccountLogic from "./AccountLogic";

export default function AccountRoute() {
  const { LogoutButton } = AccountLogic();
 
  return (
    <div className="boxAcountRoute">
      <section className="boxNavAccount">
        <NavLink className="navAccount" to="/HomeUser/GetAnime">
          List of Anime
        </NavLink>
        <NavLink className="navAccount" to="/HomeUser/GetUser">
          List of User
        </NavLink>
        <NavLink className="navAccount" to="/HomeUser/Post">
            Add New Anime
        </NavLink>
        <button onClick={LogoutButton}>Sign off</button>
      </section>
    </div>
  );
}
