import axios from "axios";
import React, { useEffect, useState } from "react";
import "./home.css";
import { IObject } from "../../Interface/interface";
import ReactPlayer from "react-player";

function Home() {
  const [dataName, setDataName] = useState<IObject[]>([]);
  
  const callData = async () => {
    const res = await axios.get(`http://localhost:9000/api/data`);
    setDataName(res.data);
  };

  useEffect(() => {
    callData();
  }, []);

  return (
    <div className="homecss">
      <section className="BoxTitle">
        {dataName.map((items) => {
          return <div>{items.title}</div>;
        })}
      </section>
      <section className="boxCatalogo">
        <article className="boxVideo">
          {dataName.map((items) => {
            return  <div className='video'>
            <ReactPlayer
              className='react-player'
               url={items.video}
                width='30h%'
                 height='100%'
                />
             </div>
          })}
        </article>
        <article className="boxImg">
          {dataName.map((items) => {
            return <div>
              <img src={items.img} alt="" />
            </div>
          })}
        </article>
      </section>
    </div>
  );
}

export default Home;
