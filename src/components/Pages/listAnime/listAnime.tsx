import React from "react";
import "./listAnime.css";

function listAnime() {
  return (
    <div className="boxListAnime">
      <form>
        <section>
          <input type="text" />
          <section>
            <button>Search</button>
          </section>
        </section>
      </form>
      <div>
        <h1>Aqui ira todos los elementos filtrados</h1>
      </div>
    </div>
  );
}

export default listAnime;
