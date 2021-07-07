import React from "react";
import VideoItem from "./VideoItem";

// instead of props in the param we will deconstruct to videos
const VideoList = ({ videos }) => {
  //props.videos

  const renderedList = videos.map((video) => {
    return <VideoItem video={video} />;
  });

  return <div>{renderedList} </div>;
};

export default VideoList;
