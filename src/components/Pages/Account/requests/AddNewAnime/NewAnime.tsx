import React from "react";
import "./NewAnime.css";
import NewAnimeLogic from "./useNewAnimeLogic";

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
    <div className="box_new_anime">
      <form onSubmit={handleSubmit}>
        <span>New Anime</span>
        {errorMessage && <p>{errorMessage}</p>}
        <input
          type="text"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={gender}
          required
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          type="text"
          value={img}
          required
          onChange={(e) => setImg(e.target.value)}
        />
        <input
          type="text"
          value={video}
          required
          onChange={(e) => setVideo(e.target.value)}
        />
        <textarea
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
