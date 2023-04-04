import React from "react";
import ReactPlayer from "react-player";
import { ChildIsAnime } from "../InterfaceHome";

function ListVideo(props: ChildIsAnime) {
  return (
    <article className="box_video">
      {props.dataName.map((items) => {
        return (
          <div className="video" key={items._id}>
            <div className="title">{items.title}</div>
            <ReactPlayer
              controls={true}
              light={true}
              className="react-player"
              url={items.video}
              width="100%"
              height="80%"
            />
          </div>
        );
      })}
    </article>
  );
}

export default ListVideo;
