import React from "react";
import PlayVideo from "./PlayVideo";
import Recommended from "./Recommended";
import { useParams } from "react-router";

import "../App";

function Video() {
  const { videoId, categoryId } = useParams();

  return (
    <div className="videoParent grid grid-cols-12 gap-5 p-5">
      <div className="play col-span-8">
        <PlayVideo videoId={videoId} />
      </div>
      <div className="recom col-span-4">
        <Recommended categoryId={categoryId} />
      </div>
    </div>
  );
}

export default Video;
