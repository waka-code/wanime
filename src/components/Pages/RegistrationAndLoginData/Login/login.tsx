import { NavLink } from "react-router-dom";
import "../RegisterAndLogin.css";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
import LoginLogic from "./useLoginLogic";

export default function Login() {
  const { handleSubmit, setUser, setPass, errorMessage, user, pass } =
    LoginLogic();

  return (
    <div className="box_form_login">
      <form className="frm_login" onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <section className="box_imput">
          <BiUserCircle className="icons" />
          <input
            type="text"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
        </section>
        <section className="box_imput">
          <RiLockPasswordLine className="icons" />
          <input
            type="password"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            required
          />
        </section>
        <button type="submit">
          Sign In
        </button>
        {errorMessage && <p>{errorMessage}</p>}
        <section className="box_account">
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
