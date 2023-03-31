import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiUrLogin } from "../../../../Apis/apis";
import { htmlElement } from "../types/types";

export default function LoginLogic() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useNavigate();

  const handleSubmit = async (event: htmlElement) => {
    event.preventDefault();
    try {
      const response = await axios.post(apiUrLogin, {
        user,
        pass,
      });
      if (response) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        history("/HomeUser");
        window.location.reload();
      }
    } catch (error) {
      setErrorMessage(`Nombre de usuario o contraseña incorrectos`);
    }
  };

  useEffect(() => {
    const tokens = localStorage.getItem("token");
    if (tokens) {
      history("/HomeUser");
    }
  }, [history]);

  return { setUser, setPass, errorMessage, handleSubmit, pass, user };
}
