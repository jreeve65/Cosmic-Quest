
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Selection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const gameButton = document.getElementById("gameButton");
    gameButton.addEventListener("click", () => {
      navigate("/GameCQ"); // Ensure the path matches your routing setup
    });
    const tipButton = document.getElementById("tip-button");
    tipButton.addEventListener("click", () => {
      navigate("/Stripe"); // Ensure the path matches your routing setup
    });
        // audio stuff
        const audioStop = document.getElementById("stop-audio")
        const audioPlay = document.getElementById("play-audio")
        const audioElement = document.getElementById('game-audio')
    
        if(audioStop){
          audioStop.addEventListener("click", () => {
            audioElement.pause();
          })
        }
        if(audioPlay){
          audioPlay.addEventListener("click", () => {
            audioElement.play();
          })
        }
    // end of audio stuff
  }, [navigate]);

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
            <audio autoplay loop id="game-audio">
              <source src={`/soundscape/cosmic quest water planet.mp3?t=${new Date().getTime()}`} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <button id="stop-audio" title="pause audio" className="ghost CQfont formButton" style={{padding:"5px", margin:"3px"}}>⏸</button>
            <button id="play-audio" title="play audio" className="ghost CQfont formButton" style={{padding:"5px", margin:"3px"}}>▶</button>
          </div>
          {/* audio end */}
    </div>
  );
};

export default Selection;
