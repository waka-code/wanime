import "./DescriptionAnimes.css";
import logoPersonaje from "../../../img/logoPersonaje.png";
import ReactPlayer from "react-player";
import DescriptionAnimeLogic from "./DescriptionAnimeLogic";

export default function DescriptionAnimes() {
  const { animesDescript } = DescriptionAnimeLogic();

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

