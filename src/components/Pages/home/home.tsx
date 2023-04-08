import "./home.css";
import { AiOutlineInstagram } from "react-icons/ai";
import ListImag from "./listImg/ListImag";
import ListVideo from "./listVideo/ListVideo";
import ListNameAnime from "./listName/ListNameAnime";
import AxiosApi from "../../../Apis/AxiosApi";

function Home() {
  const { dataName } = AxiosApi();
  return (
    <div className="home_css">
      <section className="box_title">
        <article className="box_social">
          <span>Follow us on Instagram</span>
          <a href="https://www.instagram.com/waka_code29/" target="_blank">
            <AiOutlineInstagram />
          </a>
        </article>
        <ListNameAnime dataName={dataName} />
      </section>
      <section className="box_catalogo">
        <ListVideo dataName={dataName} />
        <ListImag dataName={dataName} />
      </section>
    </div>
  );
}

export default Home;
