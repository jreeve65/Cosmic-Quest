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

  // If data isn't here yet, show a loading message
  if (!gameData) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="text-light bg-dark p-5">
      <Container>
        {/* Display the current game text */}
        <p className="event-text">{gameData.text}</p>

        {/* Display an image if provided */}
        {gameData.image && (
          <div className="image-container">
            {/* Image element for displaying the game-related image */}
            <img src={gameData.image} alt="Game event" className="event-image" />
          </div>
        )}

        {/* Play audio if provided */}
        {gameData.audio && (
          <div className="audio-container">
            {/* Audio element for playing game-related audio */}
            <audio controls>
              <source src={gameData.audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}

        <Row>
          {/* Map over choices, and handle clicks */}
          {gameData.choices.map((choice) => (
            <Col key={choice.choiceId}>
              <Card>
                <Card.Body>
                  {/* Button sends the choice ID when clicked */}
                  <Button variant="primary" onClick={() => clickOption(choice.eventRef)}>
                    {choice.choice}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default GameCQ;
