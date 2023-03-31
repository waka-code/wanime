import { NavLink } from "react-router-dom";
import "../RegisterAndLogin.css";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
import LoginLogic from "./LoginLogic";

export default function Login() {
  const {handleSubmit,setUser, setPass, user, errorMessage,pass } = LoginLogic()

  return (
    <div className="boxFormLogin">
      <form className="frmLogin" onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <section className="boxImput">
          <BiUserCircle className="icons" />
          <input type="text" value={user} onChange={(e) => setUser(e.target.value)}/>
        </section>
        <section className="boxImput">
          <RiLockPasswordLine className="icons" />
          <input type="text" value={pass} onChange={(e) => setPass(e.target.value)}/>
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
