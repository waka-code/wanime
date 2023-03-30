import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiUrlCreateUser } from "../../../../Apis/apis";
import { htmlElement } from "../types/types";

function RegisterLogic() {
  const [name, setName] = useState("");
  const [user, setUSer] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useNavigate();

  const handleSubmit = async (event: htmlElement) => {
    event.preventDefault();

    try {
      const response = await axios.post(apiUrlCreateUser, { name, user, pass });
      console.log(response.data);
      const token = response.data.token;
      localStorage.setItem("token", token);
      history("/HomeUser");
    } catch {
      setErrorMessage("Usuario Existente");
    }
  };
  return { setName, setUSer, setPass, errorMessage, handleSubmit };
}

export default RegisterLogic;
