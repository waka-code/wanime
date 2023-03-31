import React from "react";
import "./NewAnime.css";

export default function NewAnime() {
  return (
    <div className="boxNewAnime">
      <form>
        <span>New Anime</span>
        <input type="text" placeholder="Title"/>
        <input type="text" placeholder="Gender"/>
        <input type="text" placeholder="Img"/>
        <input type="text"placeholder="Video" />
        <textarea placeholder="Description"/>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
