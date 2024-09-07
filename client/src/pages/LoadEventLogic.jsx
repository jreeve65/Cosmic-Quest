import { useState, useEffect } from "react";
import { getMe, loadGame } from "../services/API";
import Auth from "../utils/auth";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

const ShowGame = () => {
  const [userData, setUserData] = useState({});
  const [gameData, setGameData] = useState({});

  // use this to determine if `useEffect()` hook needs to run again

  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }

        const response = await getMe(token);

        if (!response.ok) {
          throw new Error("something went wrong!");
        }

        const user = await response.json();
        setUserData(user);

        const gameResponse = await loadGame(user);
        if (!gameResponse.ok) {
          throw new Error("something went wrong!");
        }

        const game = await response.json();
        setGameData(game);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  });

  {/* ----------ALL OF THE FOLLOWING IS PLACEHOLDER TO SHOW THE LOGIC!!! PLEASE CHANGE IT --------------*/}
  // if data isn't here yet, say so
  if (!gameData.title) {
    return <h2>LOADING...</h2>;
  }
  return (
    <>
      <div fluid className="text-light bg-dark p-5">
        <Container>
          <h1>[placeholder text lol]</h1>
          {/* IM NOT DOIGN FRONT END THIS IS ALL A PLACEHOLDER */}
        </Container>
      </div>
      <Container>
        <Row>
          <Card>
            <Card.Title>{gameData.title}</Card.Title>
            <Card.Body>
              {gameData.choices.map((choice) => {
                return (
                  <>
                    <Button>{choice}</Button>
                  </>
                );
              })}
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default ShowGame;
