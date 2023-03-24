import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { htmlElement, apiUrlCreateUser } from "./types/types";
import { useNavigate } from "react-router-dom";

function Registe() {
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

  return (
    <div className="boxFormLogin">
      <form className="frmLogin" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <section>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </section>
        <section>
          <label htmlFor="User">User</label>
          <input
            type="text"
            name="User"
            onChange={(e) => setUSer(e.target.value)}
          />
        </section>
        <section>
          <label htmlFor="Pass">Pass</label>
          <input
            type="text"
            name="Pass"
            onChange={(e) => setPass(e.target.value)}
          />
        </section>
        <button type="submit">Sign Up</button>
        {errorMessage && <p>{errorMessage}</p>}
        <section>
          <span>
            Dont have an account? <NavLink to="/login">Sign In</NavLink>
          </span>
        </section>
      </form>
    </div>
  );
}

export default Registe;
