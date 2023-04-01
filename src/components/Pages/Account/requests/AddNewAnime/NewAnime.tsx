import React from "react";
import "./NewAnime.css";
import NewAnimeLogic from "./NewAnimeLogic";

export default function NewAnime() {
  const {
    setTitle,
    setDescription,
    setGender,
    setImg,
    setVideo,
    errorMessage,
    handleSubmit,
    title,
    description,
    gender,
    img,
    video,
  } = NewAnimeLogic();

  return (
    <div className="boxNewAnime">
      <form onSubmit={handleSubmit}>
        <span>New Anime</span>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <input
          type="text"
          value={video}
          onChange={(e) => setVideo(e.target.value)}
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
