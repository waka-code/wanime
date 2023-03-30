import "./home.css";
import { AiOutlineInstagram } from "react-icons/ai";
import ListImag from "./listImg/ListImag";
import ListVideo from "./listVideo/ListVideo";
import ListNameAnime from "./listName/ListNameAnime";
import AxiosApi from "../../../Apis/AxiosApi";

function Home() {
  const { dataName } = AxiosApi();

  return (
    <div className="homecss">
      <section className="boxTitle">
        <article className="boxSocial">
          <span>Siguenos en Instegram</span>
          <a href="https://www.instagram.com/waka_code29/" target="_blank">
            <AiOutlineInstagram />
          </a>
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
