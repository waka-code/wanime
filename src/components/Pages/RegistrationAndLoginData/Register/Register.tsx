import { NavLink } from "react-router-dom";
import RegisterLogic from "./RegisterLogic";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";

function Registe() {
  const { setName, setUSer, setPass, errorMessage, handleSubmit } =
    RegisterLogic();

  return (
    <div className="boxFormLogin">
      <form className="frmLogin" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <section className="boxImput">
          <BiUserCircle className="icons" />
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </section>
        <section className="boxImput">
          <BiUserCircle className="icons" />
          <input
            type="text"
            name="User"
            onChange={(e) => setUSer(e.target.value)}
            required
          />
        </section>
        <section className="boxImput">
          <RiLockPasswordLine className="icons" />
          <input
            type="text"
            name="Pass"
            onChange={(e) => setPass(e.target.value)}
            required
          />
        </section>
        <button type="submit">Sign Up</button>
        {errorMessage && <p>{errorMessage}</p>}
        <section className="boxAccount">
          <span>
            Dont have an account?{" "}
            <NavLink to="/login" className="Sign">
              Sign In
            </NavLink>
          </span>
        </section>
      </form>
    </div>
  );
}

export default Registe;
