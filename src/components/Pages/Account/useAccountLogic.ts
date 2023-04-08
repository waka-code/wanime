import axios from "axios";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../Apis/apis";
import "./AccountLogic.css";
import { useCallback } from "react";
import LoginLogic from "../RegistrationAndLoginData/Login/useLoginLogic";

export default function AccountLogic() {
  const history = useNavigate();
  const { setIsOnline } = LoginLogic();
  const LogoutButton = useCallback(async () => {
    try {
      await axios.post(logout);
      localStorage.removeItem("token");
      setIsOnline(false)
      history("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }, [history,setIsOnline]);

  return { LogoutButton };
}
