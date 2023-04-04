import { NavLink } from "react-router-dom";
import RegisterLogic from "./useRegisterLogic";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";

function Registe() {
  const {name, user, pass, setName, setUSer, setPass, errorMessage, handleSubmit } =
    RegisterLogic();

  return (
    <div className="box_form_login">
      <form className="frm_login" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <section className="box_imput">
          <BiUserCircle className="icons" />
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </section>
        <section className="box_imput">
          <BiUserCircle className="icons" />
          <input
            type="text"
            name="User"
            onChange={(e) => setUSer(e.target.value)}
            value={user}
            required
          />
        </section>
        <section className="box_imput">
          <RiLockPasswordLine className="icons" />
          <input
            type="password"
            name="Pass"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            required
          />
        </section>
        <button type="submit">Sign Up</button>
        {errorMessage && <p>{errorMessage}</p>}
        <section className="box_account">
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
