import React from "react";
function VideoItem({ video }) {
  return (
    <div className="col-sm">
      <div className="card" style={{ width: "18rem", marginTop: "3rem" }}>
        <img
          src={video.snippet.thumbnails.medium.url}
          className="card-img-top"
          alt={video.snippet.description}
        />
        <div className="card-body">
          <h5 className="card-title">{video.snippet.title}</h5>
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
