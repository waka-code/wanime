import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiUrlCreateUser } from "../../../../Apis/apis";
import { htmlElement } from "../types/Types";
import LoginLogic from "../Login/useLoginLogic";

export default function RegisterLogic() {
  const [name, setName] = useState("");
  const [user, setUSer] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useNavigate();
  const { setIsOnline } = LoginLogic();

  const handleSubmit = useCallback(
    async (event: htmlElement) => {
      event.preventDefault();

      try {
        const response = await axios.post(apiUrlCreateUser, {
          name,
          user,
          pass,
        });
        const { token } = response.data;
        localStorage.setItem("token", token);
        setIsOnline(true);
        history("/HomeUser");
      } catch {
        setErrorMessage("Usuario Existente");
      }
    },
    [name, user, pass, history, setIsOnline]
  );
  return {
    name,
    user,
    pass,
    setName,
    setUSer,
    setPass,
    errorMessage,
    handleSubmit,
  };
}
