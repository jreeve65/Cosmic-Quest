import { useState, useEffect } from "react";
import { getMe,saveGame, loadGame } from "../services/API";
import Auth from "../utils/auth";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

const AutoSave = () => {
  const [userData, setUserData] = useState({});
  const [gameData, setGameData] = useState({});

  // use this to determine if `useEffect()` hook needs to run again

  useEffect(() => {
    /*drill into the choice that is selected and pass the in
   the eventRef property of choice as a parameter of autoSaveEvent function */
    const autoSaveEvent = async (eventRef) => {
      //these dont exist yet so im using placeholder words
      const token = Auth.loggedIn() ? Auth.getToken() : null;

      if (!token) {
        return false;
      }

      try {
        
        const user= await getMe(token);
        if(!user.ok){
          throw new Error("could not preform request");
        }
        const userData = await user.json();
        saveGame({
          id:userData._id,
          gameState: eventRef,
        })

        if (!response.ok) {
          throw new Error("something went wrong!");
        }
        setGameData([nextEvent]);
      } catch (err) {
        console.error(err);
      }
      console.log(gameData.title);
      //then need to change gameState to be gameData.title
      //have not written that part out
      
    };
    autoSaveEvent();    
  });

  // if data isn't here yet, say so
  if (!gameData.title) {
    return <h2>LOADING...</h2>;
  }
  return <></>;
};

export default AutoSave;
