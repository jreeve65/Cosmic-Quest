import spaceVideo from "../assets/videos/space.mp4";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Selection = () => {
const navigate = useNavigate();

  useEffect(() => {
    const gameButton = document.getElementById("gameButton");
    gameButton.addEventListener("click", () => {
      navigate("/GameCQ");
    });
  });

  return (
    <div>
      <video class="video" loop="true" autoplay="autoplay" preload="true" muted>
        <source src={spaceVideo} type="video/mp4" />
      </video>
      <h1 class="CQfont selectionTitle mb-5 mt-3">Cosmic Quest</h1>
      <div class="container-fluid">
        <div class="row">
          <div class="d-grid gap-5 col-6 mx-auto">
            <button
              class="btn btn-light p-3 mt-4"
              type="button"
              style={{ fontFamily: "Orbitron" }}
              id="gameButton"
            >
              Play Cosmic Quest
            </button>
            <button
              class="btn btn-light p-3"
              type="button"
              style={{ fontFamily: "Orbitron" }}
            >
              Load Previous Game
            </button>
            <button
              class="btn btn-light p-3"
              type="button"
              style={{ fontFamily: "Orbitron" }}
            >
              Play Intro Video
            </button>
            <button
              class="btn btn-light p-3"
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
