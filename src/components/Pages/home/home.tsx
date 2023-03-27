import axios from "axios";
import React, { useEffect, useState } from "react";
import "./home.css";
import { IObject } from "../../Interface/interface";
import { AiOutlineInstagram } from "react-icons/ai";
import { apiUrlData } from "../../../Apis/apis";
import ListImag from "./listImg/ListImag";
import ListVideo from "./listVideo/ListVideo";
import ListNameAnime from "./listName/ListNameAnime";

function Home() {
  const [dataName, setDataName] = useState<IObject[]>([]);

  const callData = async () => {
    const res = await axios.get(apiUrlData);
    setDataName(res.data.docs);
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
        <ListNameAnime dataName={dataName} />
      </section>
      <section className="boxCatalogo">
        <ListVideo dataName={dataName} />
        <ListImag dataName={dataName} />
      </section>
    </div>
  );
}

export default Home;
