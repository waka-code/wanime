import axios from "axios";
import React, { useEffect, useState } from "react";
import "./home.css";
import { IObject } from "../../Interface/interface";
import ReactPlayer from "react-player";
import { AiOutlineInstagram } from "react-icons/ai";
import { apiUrlData } from "../../../Apis/apis";

function Home() {
  const [dataName, setDataName] = useState<IObject[]>([]);

  const callData = async () => {
    const res = await axios.get(apiUrlData);
    setDataName(res.data);
  };

  useEffect(() => {
    callData();
  }, []);

  return (
    <div className="homecss">
      <section className="boxTitle">
        <article className="boxSocial">
          <span>Siguenos en Instegram</span>
          <AiOutlineInstagram />
        </article>
        <h2>List</h2>
        <div className="listTitle">
          {dataName.map((items) => {
            return (
              <span className="titleName">
                {items.title}
                <br />
              </span>
            );
          })}
        </div>
      </section>
      <section className="boxCatalogo">
        <article className="boxVideo">
          {dataName.map((items) => {
            return (
              <div className="video">
                <div className="title">{items.title}</div>
                <ReactPlayer
                  className="react-player"
                  url={items.video}
                  width="100%"
                  height="auto"
                />
              </div>
            );
          })}
        </article>
        <article className="boxImg">
          {dataName.map((items) => {
            return (
              <div className="boxImgTitle">
                <span>{items.title}</span>
                <img src={items.img} alt="logoImg" id="imgBox" />
              </div>
            );
          })}
        </article>
      </section>
    </div>
  );
}

export default Home;
