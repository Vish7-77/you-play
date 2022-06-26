import React from "react";
import VideoItem from "./VideoItem";

function VideoList({ videos }) {
  const renderedVideos = videos.map((video) => {
    return <VideoItem key={video.id.videoId} video={video} />;
  });

  return <>{renderedVideos}</>;
}

export default VideoList;
