import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VideoPrompt from "../components/VideoPrompt";

const Selection = () => {
  const navigate = useNavigate();
  const [showVideoPrompt, setShowVideoPrompt] = useState(false);

  useEffect(() => {
    const gameButton = document.getElementById("gameButton");

    const audioStop = document.getElementById("stop-audio");
    const audioPlay = document.getElementById("play-audio");
    const audioElement = document.getElementById("game-audio");

    const handleGameButtonClick = () => {
      navigate("/GameCQ");
    };

    const handleAudioStop = () => {
      audioElement.pause();
    };

    const handleAudioPlay = () => {
      audioElement.play();
    };

    if (gameButton) {
      gameButton.addEventListener("click", handleGameButtonClick);
    }

    if (audioStop) {
      audioStop.addEventListener("click", handleAudioStop);
    }

    if (audioPlay) {
      audioPlay.addEventListener("click", handleAudioPlay);
    }

    // Cleanup event listeners on component unmount
    return () => {
      if (gameButton) {
        gameButton.removeEventListener("click", handleGameButtonClick);
      }
      if (audioStop) {
        audioStop.removeEventListener("click", handleAudioStop);
      }
      if (audioPlay) {
        audioPlay.removeEventListener("click", handleAudioPlay);
      }
    };

  }, [navigate]);

  const handleVideoButtonClick = () => {
    setShowVideoPrompt(true);
  };

  const handleCloseVideoPrompt = () => {
    setShowVideoPrompt(false);
  };

  return (
    <div>
      <h1 className="CQfont selectionTitle mb-5 mt-3">Cosmic Quest</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="d-grid gap-5 col-6 mx-auto">
            <button
              className="btn btn-light p-3 mt-4"
              type="button"
              style={{ fontFamily: "Orbitron" }}
              id="gameButton"
            >
              Play Cosmic Quest
            </button>
            <button
              className="btn btn-light p-3"
              type="button"
              style={{ fontFamily: "Orbitron" }}
            >
              Load Previous Game
            </button>
            <button
              className="btn btn-light p-3"
              type="button"
              style={{ fontFamily: "Orbitron" }}
              onClick={handleVideoButtonClick} // Show the VideoPrompt when clicked
            >
              Play Intro Video
            </button>
            <button
              className="btn btn-light p-3"
              type="button"
              style={{ fontFamily: "Orbitron" }}
            >
              Logout
            </button>
            <button
              className="btn btn-light p-3"
              type="button"
              style={{ fontFamily: "Orbitron" }}
              id="tip-button"
            >
              Tip Us
            </button>
          </div>
        </div>
      </div>

      {/* audio start */}
      <div className="audio-container">
        <audio autoPlay loop id="game-audio">
          <source src={`/soundscape/cosmic quest water planet.mp3?t=${new Date().getTime()}`} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <button id="stop-audio" title="pause audio" className="ghost CQfont formButton" style={{ padding: "5px", margin: "3px" }}>
          ⏸
        </button>
        <button id="play-audio" title="play audio" className="ghost CQfont formButton" style={{ padding: "5px", margin: "3px" }}>
          ▶
        </button>
      </div>
      {/* audio end */}

      {showVideoPrompt && (
  <VideoPrompt
    show={showVideoPrompt}
    onClose={handleCloseVideoPrompt}
    videoUrl="https://www.youtube.com/embed/dTM1lgQXJCs"
  />
)}

    </div>
  );
};

export default Selection;
