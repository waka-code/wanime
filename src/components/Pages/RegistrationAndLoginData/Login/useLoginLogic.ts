import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiUrLogin } from "../../../../Apis/apis";
import { htmlElement } from "../types/Types";

export default function LoginLogic() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isOnline, setIsOnline] = useState(false);
  const history = useNavigate();

  const handleSubmit = useCallback(
    async (event: htmlElement) => {
      event.preventDefault();
      try {
        const response = await axios.post(apiUrLogin, {
          user,
          pass,
        });
        const { token } = response.data;

        if (response && token) {
          localStorage.setItem("token", token);
          history("/HomeUser");
        }
      } catch (error) {
        setUser("");
        setPass("");
        setErrorMessage(`Nombre de usuario o contraseña incorrectos`);
      }
    },
    [user, pass, history]
  );

  useEffect(() => {
    const tokens = localStorage.getItem("token");
    if (tokens) {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }
  }, [history, isOnline]);

  return {
    setUser,
    setPass,
    errorMessage,
    handleSubmit,
    pass,
    user,
    isOnline,
    setIsOnline,
  };
}
