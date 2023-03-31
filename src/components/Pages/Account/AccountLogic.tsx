import axios from "axios";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../Apis/apis";
import "./AccountLogic.css";

function AccountLogic() {
  const history = useNavigate();
  function LogoutButton() {
    axios
      .post(logout)
      .then(() => {
        localStorage.removeItem("token");
        history("/login");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  }

  return {LogoutButton}
}

export default AccountLogic;
