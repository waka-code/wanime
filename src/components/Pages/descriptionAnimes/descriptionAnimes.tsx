import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiUrlData } from "../../../Apis/apis";
import { IObject } from "../../Interface/interface";
import "./DescriptionAnimes.css";
import logoPersonaje from "../../../img/logoPersonaje.png";
import ReactPlayer from "react-player";

function DescriptionAnimes() {
  const { _id } = useParams();
  const [animesDescript, setAnimesDescript] = useState<IObject>();

  useEffect(() => {
    const searchData = async () => {
      const res = await axios.get(`${apiUrlData}/${_id}`);
      setAnimesDescript(res.data);
      console.log(res.data.docs);
    };

    searchData();
  }, [_id]);

  return (
    <div className="boxDescription">
      <section className="boxImgPersonaje">
        <img src={logoPersonaje} alt="logoPersonaje" />
      </section>
      <section className="boxGender">
        <section className="boxImgGender">
          <img src={animesDescript?.img} alt={animesDescript?.title} />
          <article>{animesDescript?.title}</article>
        </section>
        <section className="boxDescriptions">
          <section>
            <span>Sinopsis</span>
            <article className="gender">{animesDescript?.gender}</article>
            <article>{animesDescript?.description}</article>
          </section>
          <article className="boxVideoDescript">
            <h3>Trailer</h3>
            <ReactPlayer
              className="react-player"
              url={animesDescript?.video}
              width="auto"
              height="95%"
            />
          </article>
        </section>
      </section>
    </div>
  );
}

export default DescriptionAnimes;
