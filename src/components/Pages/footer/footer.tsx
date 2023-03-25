import React from "react";
import "./footer.css";
import logoFooter from "../../../img/logo.png";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { TbBrandTiktok } from "react-icons/tb";
function footer() {
  return (
    <div className="boxFooter">
      <section className="boxFooterSections">
      <section className="boxLogoFooter">
        <img src={logoFooter} alt="logoFooter" />
      </section>
      <section className="boxSocialFooter">
        <AiOutlineInstagram className="social"/>
        <TbBrandTiktok className="social" />
        <AiFillGithub className="social" />
        <AiOutlineWhatsApp className="social" />
      </section>
      </section>
    <span>wakaCode || Ing.Sistemas</span>
    </div>
  );
}

export default footer;
