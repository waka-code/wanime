import React from "react";
import UpdateAnimeLogic from "./useUpdateAnimeLogic";

export default function UpdateAnime() {
  const {
    setTitle,
    setDescription,
    setGender,
    setImg,
    setVideo,
    errorMessage,
    avoidRefills,
    handleSubmits,
    title,
    description,
    gender,
    img,
    video,
  } = UpdateAnimeLogic();

  return (
    <div className="box_new_anime">
      <form onSubmit={avoidRefills}>
        <span>Update</span>
        {errorMessage && <p>{errorMessage}</p>}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          type="text"
          placeholder="Img"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <input
          type="text"
          placeholder="Video"
          value={video}
          onChange={(e) => setVideo(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" onClick={handleSubmits}>
          Update
        </button>
      </form>
    </div>
  );
}
