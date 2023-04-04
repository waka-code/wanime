import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiUrLogin } from "../../../../Apis/apis";
import { htmlElement } from "../types/Types";
import useIsVisible from "../../../routes/navbar/useIsVisible";

export default function LoginLogic() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useNavigate();
  const { setIsOnline } = useIsVisible();
  const handleSubmit = useCallback(
    async (event: htmlElement) => {
      event.preventDefault();
      try {
        const response = await axios.post(apiUrLogin, {
          user,
          pass,
        });
        if (response) {
          const token = response.data.token;
          localStorage.setItem("token", token);
          setIsOnline(true)
          history("/HomeUser");
        }
      } catch (error) {
        setUser("");
        setPass("");
        setIsOnline(false)
        setErrorMessage(`Nombre de usuario o contraseña incorrectos`);
      }
    },
    [user, pass, history,setIsOnline]
  );

  useEffect(() => {
    const tokens = localStorage.getItem("token");
    if (tokens) {
      history("/HomeUser");
    }
  }, [history]);

  return { setUser, setPass, errorMessage, handleSubmit, pass, user };
}
