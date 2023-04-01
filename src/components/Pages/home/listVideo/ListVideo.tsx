import React from "react";
import ReactPlayer from "react-player";
import { ChildProps } from "../InterfaceHome";

function ListVideo(props: ChildProps) {
  return (
    <article className="boxVideo">
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
