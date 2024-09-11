import { useState, useEffect } from "react";
import { getMe, loadGame, saveGame } from "../services/API";
import Auth from "../../src/services/auth";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

const GameCQ = () => {
  const [userData, setUserData] = useState({});
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }

        const response = await getMe(token);

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const user = await response.json();
        setUserData(user);

        const gameResponse = await loadGame(user);
        if (!gameResponse.ok) {
          throw new Error("Failed to fetch game data");
        }

        const game = await gameResponse.json();
        setGameData(game);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const clickOption = async (reference) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const userResponse = await getMe(token);
      if (!userResponse.ok) {
        throw new Error("Could not perform request");
      }
      const userData = await userResponse.json();

      const saveResponse = await saveGame({
        id: userData._id,
        gameState: reference,
      }, token);

      if (!saveResponse.ok) {
        throw new Error("Something went wrong while saving the game!");
      }

      // Optionally refetch the game data to reflect changes
      const gameResponse = await loadGame(userData);
      if (!gameResponse.ok) {
        throw new Error("Failed to fetch updated game data");
      }
      const updatedGame = await gameResponse.json();
      setGameData(updatedGame);

    } catch (err) {
      console.error(err);
    }
  };

  // Reload the audio when the narration changes
  useEffect(() => {
    const audioElement = document.getElementById("game-audio");
    if (audioElement) {
      audioElement.load();  // Reload the audio with the new source
    }
  }, [gameData?.narration]);

  // If data isn't here yet, show a loading message
  if (!gameData) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="game-container">
    
      <div className="content-container">
        {/* Display the current game text */}
        <p className="event-text">{gameData.text}</p>

        {/* Display an image if provided */}
        {gameData.image && (
          <div className="image-container">
            <img src={gameData.image} alt="Game event" className="event-image" />
          </div>
        )}

        {/* Play audio if provided */}
        {gameData.narration && (
          <div className="audio-container">
            <audio controls id="game-audio" key={gameData.narration}>
              <source src={`${gameData.narration}?t=${new Date().getTime()}`} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}

<div className="choices-container">
  {gameData.choices.map((choice) => (
    <div key={choice.choiceId} className="choice-button-wrapper">
      <button className="choice-button" onClick={() => clickOption(choice.eventRef)}>
        {choice.choice}
      </button>
    </div>
  ))}
</div>



      </div>
    </div>
  );
};

export default GameCQ;
