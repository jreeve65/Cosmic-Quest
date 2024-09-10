import spaceVideo from "../assets/videos/space.mp4";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Selection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const gameButton = document.getElementById("gameButton");
    gameButton.addEventListener("click", () => {
      navigate("/GameCQ"); // Ensure the path matches your routing setup
    });
  }, [navigate]);

  return (
    <div>
      <video className="video" loop autoPlay muted>
        <source src={spaceVideo} type="video/mp4" />
      </video>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selection;
