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
    console.log(reference);
    if (!token) {
      return false;
    }

    try {
      
      const user= await getMe(token);
      if(!user.ok){
        throw new Error("could not preform request");
      }
      const userData = await user.json();
      console.log(userData);
      console.log(token);

      saveGame({
        id:userData._id,
        gameState: reference,
      },token)

      if (!userData.ok) {
        throw new Error("something went wrong!");
      }

    } catch (err) {
      console.error(err);
    }
    console.log(gameData.title);
  }


  // If data isn't here yet, show a loading message
  if (!gameData) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="text-light bg-dark p-5">
      <Container>
        {/* Display the current game text */}
        <p>{gameData.text}</p>

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
