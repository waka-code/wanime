import "./DescriptionAnimes.css";
import logoPersonaje from "../../../img/logoPersonaje.png";
import ReactPlayer from "react-player";
import DescriptionAnimeLogic from "./useDescriptionAnimeLogic";
import ViewAnimeLogic from "../Account/requests/ListOfAnime/useViewAnimeLogic";
import { NavLink } from "react-router-dom";
import UpdateAnimeLogic from "../Account/requests/UpdateAnime/useUpdateAnimeLogic";
import LoginLogic from "../RegistrationAndLoginData/Login/useLoginLogic";

export default function DescriptionAnimes() {
  const { animesDescript } = DescriptionAnimeLogic();
  const { handleSubmit } = ViewAnimeLogic();
  const { captureId } = UpdateAnimeLogic();
  const { isOnline } = LoginLogic();

  return (
    <div className="box_description">
      <section className="box_img_personaje">
        <img src={logoPersonaje} alt="logo" />
      </section>
      <section className="box_gender">
        <section className="box_img_gender">
          <img src={animesDescript?.img} alt={animesDescript?.title} />
          <article>{animesDescript?.title}</article>
          {!isOnline ? null : (
            <>
              <NavLink to="/HomeUser/Update">
                <button onClick={() => captureId(animesDescript?._id)}>
                  Update
                </button>
              </NavLink>
              <button onClick={() => handleSubmit(animesDescript?._id)}>
                Delete
              </button>
            </>
          )}
        </section>
        <section className="box_descriptions">
          <section>
            <span>Sinopsis</span>
            <article className="gender">{animesDescript?.gender}</article>
            <article>{animesDescript?.description}</article>
          </section>
          <article className="box_video_descript">
            <h3>Trailer</h3>
            <ReactPlayer
              controls={true}
              light={true}
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
