import "./home.css";
import { AiOutlineInstagram } from "react-icons/ai";
import ListImag from "./listImg/ListImag";
import ListVideo from "./listVideo/ListVideo";
import ListNameAnime from "./listName/ListNameAnime";
import AxiosApi from "../../../Apis/AxiosApi";
import ListNameAnimeLogic from "./listName/ListNameAnimeLogic";

function Home() {
  const { dataName } = AxiosApi();
  const { selectedGenre, handleGenreChange,animeData } = ListNameAnimeLogic();
  return (
    <div className="home_css">
      <section className="box_title">
        <article className="box_social">
          <span>Follow us on Instagram</span>
          <a href="https://www.instagram.com/waka_code29/" target="_blank">
            <AiOutlineInstagram />
          </a>
        </article>
        <article className="list_and_dropdonw">
          <h2>List</h2>
          <select value={selectedGenre} onChange={handleGenreChange}>
            <option value="">Gender</option>
            <option value="Accion">Accion</option>
            <option value="SobreNatural">SobreNatural</option>
            <option value="Shonen">Shonen</option>
          </select>
        </article>
        <ListNameAnime animeData={animeData}/>
      </section>
      <section className="box_catalogo">
        <ListVideo dataName={dataName} />
        <ListImag dataName={dataName} />
      </section>
    </div>
  );
}

export default Home;
