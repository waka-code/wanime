import axios from "axios";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../Apis/apis";
import "./AccountLogic.css";
import { useCallback } from "react";
import useIsVisible from "../../routes/navbar/useIsVisible";

export default function AccountLogic() {
  const history = useNavigate();
  const { setIsOnline } = useIsVisible();
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
