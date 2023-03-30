import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./HomeUser.css";

function HomeUser() {
  const history = useNavigate();
  const url = "http://localhost:8000/createUser/logout";

  function LogoutButton() {
    fetch(url)
      .then(() => {
        history("/login");
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  }

  return (
    <div className="homeUsercss">
      <button onClick={LogoutButton}>cerrar</button>
    </div>
  );
}

export default HomeUser;
