import React from 'react';


const VideoPrompt = ({ show, onClose, videoUrl }) => {
  if (!show) return null;

  return (
    <div className="video-prompt">
      <div className="video-prompt-content">
        <span className="video-prompt-close" onClick={onClose}>
          &times;
        </span>
        <iframe
          src={videoUrl}
          title="Intro Video"
          allow="autoplay; encrypted-media"
        />
      </div>
    </div>
  );
};

export default VideoPrompt;
