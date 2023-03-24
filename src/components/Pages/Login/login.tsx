import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { htmlElement, apiUrLogin } from "./types/types";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [user, setUSer] = useState("");
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
      console.log(response.data);
      const token = response.data.token;
      console.log(token);
      localStorage.setItem("token", token);
      setAuthenticated(true);
      history("/*");
    } catch {
      setErrorMessage("Nombre de usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="boxFormLogin">
      <form className="frmLogin" onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <section>
          <label htmlFor="user">User</label>
          <input type="text" onChange={(e) => setUSer(e.target.value)} />
        </section>
        <section>
          <label htmlFor="Pass">Pass</label>
          <input type="text" onChange={(e) => setPass(e.target.value)} />
        </section>
        <button type="submit">Sign In</button>
        {errorMessage && <p>{errorMessage}</p>}
        <section>
          <span>
            Dont have an account? <NavLink to="/Register">Sign Up</NavLink>
          </span>
        </section>
      </form>
    </div>
  );
}

export default Login;
function setAuthenticated(arg0: boolean) {
  throw new Error("Function not implemented.");
}
