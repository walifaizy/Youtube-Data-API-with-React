import React from "react";

const VideoDetail = (props) => {
  const video = props.video
  if(!video) {
    return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"/>;
  }


  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
        <div>
        <div className="video-detail col-md-8">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url} allowfullscreen></iframe>
          </div>

          <div className="details">
            <div className="vid-details">{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
          </div>
        </div>
       </div>
  );
}

export default VideoDetail;
