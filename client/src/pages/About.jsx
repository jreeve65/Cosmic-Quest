import { useState, useEffect } from "react";
import { getMe, loadGame, saveGame } from "../services/API";
import Auth from "../../src/services/auth";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

const About = () => {
  // Reload the audio when the narration changes


  // If data isn't here yet, show a loading message

  return (
    <div className="game-container">
    
      <div className="content-container">
        {/* Display the current game text */}
        <h2>
            Cosmic Quest
        </h2>
        <p className="event-text">
        In the year 2237, humanity has ventured beyond the confines of Earth, exploring the vast expanse of the cosmos. You and your team have been selected to embark on a perilous mission to traverse the uncharted depths of the galaxy, seeking the lost ship, Elysium. Elysium is rumored to have been in possession of the Cosmic Heart: an advanced terraforming device capable of reshaping planets or wielding catastrophic power.
<br></br>
Your journey will take you to distant planets, each with its own unique challenges and opportunities. Encounter extraterrestrial beings, from peaceful diplomats to hostile invaders, forcing you to make choices that will shape the course of your adventure. Your job is to find Elysium and the Cosmic Heart.
<br></br>
The fate of humanity and the universe is in your hands.
        </p> <br></br>
<h3>Who Are We?</h3>
<ul><a href="https://github.com/mandi7469">Amanda Changa</a></ul>
<ul><a href="https://github.com/hestrain">HeatherEllen Strain</a></ul>
<ul><a href="https://github.com/JamesWilliamParker">James Parker</a></ul>
<ul><a href="https://github.com/jreeve65">Jordan Reeves</a></ul>
      </div>
    </div>
  );
};

export default About;
