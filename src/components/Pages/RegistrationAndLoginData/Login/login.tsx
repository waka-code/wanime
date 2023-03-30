import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../RegisterAndLogin.css";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="boxFormLogin">
      <form className="frmLogin">
        <h1>Sign In</h1>
        <section className="boxImput">
          <BiUserCircle className="icons" />
          <input type="text" />
        </section>
        <section className="boxImput">
          <RiLockPasswordLine className="icons" />
          <input type="text" />
        </section>
        <button type="submit">Sign In</button>
        {errorMessage && <p>{errorMessage}</p>}
        <section className="boxAccount">
          <span>
            Dont have an account?{" "}
            <NavLink to="/Register" className="Sign">
              Sign Up
            </NavLink>
          </span>
        </section>
      </form>
    </div>
  );
}
