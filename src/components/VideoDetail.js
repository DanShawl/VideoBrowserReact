import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div className="">Loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="">
      <div className="ui embed">
        <iframe title="Video Player" src={videoSrc} frameborder="0"></iframe>
      </div>
      <div className="ui segment">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
