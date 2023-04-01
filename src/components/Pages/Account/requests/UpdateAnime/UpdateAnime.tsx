import React from "react";
import UpdateAnimeLogic from "./UpdateAnimeLogic";

export default function UpdateAnime() {
  const {
    setTitle,
    setDescription,
    setGender,
    setImg,
    setVideo,
    errorMessage,
    handleSubmitReserch,
    handleSubmits,
  } = UpdateAnimeLogic();

  return (
    <div className="boxNewAnime">
      <form onSubmit={handleSubmitReserch}>
        <span>Update</span>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Gender"
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          type="text"
          placeholder="Img"
          onChange={(e) => setImg(e.target.value)}
        />
        <input
          type="text"
          placeholder="Video"
          onChange={(e) => setVideo(e.target.value)}
        />
        <textarea
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" onClick={handleSubmits}>
          Update
        </button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
