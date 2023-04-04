import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiUrlCreateUser } from "../../../../Apis/apis";
import { htmlElement } from "../types/Types";
import useIsVisible from "../../../routes/navbar/useIsVisible";

export default function RegisterLogic() {
  const [name, setName] = useState("");
  const [user, setUSer] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useNavigate();
  const { setIsOnline } = useIsVisible();

  const handleSubmit = useCallback(async (event: htmlElement) => {
    event.preventDefault();

    try {
      const response = await axios.post(apiUrlCreateUser, { name, user, pass });
      console.log(response.data);
      const token = response.data.token;
      localStorage.setItem("token", token);
      setIsOnline(true)
      history("/HomeUser");
    } catch {
      setErrorMessage("Usuario Existente");
    }
  },[name,user,pass,history,setIsOnline]);
  return {name, user, pass, setName, setUSer, setPass, errorMessage, handleSubmit };
}
