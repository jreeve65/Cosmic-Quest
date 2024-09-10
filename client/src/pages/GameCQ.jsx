import { useState, useEffect } from "react";
import { getMe, loadGame } from "../services/API";
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

        const gameResponse = await loadGame(user.id, token);
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

  // If data isn't here yet, show a loading message
  if (!gameData) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="text-light bg-dark p-5">
      <Container>
        <h1>{gameData.title}</h1>
        <p>{gameData.text}</p>
        <Row>
          {gameData.choices.map((choice) => (
            <Col key={choice.choiceId}>
              <Card>
                <Card.Body>
                  <Button variant="primary">{choice.choice}</Button>
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
