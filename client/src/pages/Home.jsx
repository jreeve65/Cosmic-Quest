
import React, { useEffect, useState } from "react";
import { createUser, loginUser } from "../services/API";
import Auth from "../services/auth";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleSignUp = async (event) => {
    if (userFormData.username && userFormData.email && userFormData.password) {
      event.preventDefault();

      try {
        const response = await createUser(userFormData);

        console.log(response);
        if (!response.ok) {
          alert("Please try again");
          throw new Error("Something went wrong!");
        } else {
          const { token, user } = await response.json();
          console.log(user);
          Auth.login(token);
          alert("Account created, please login to play!");
          const container = document.getElementById("loginForm");
          container.classList.remove("right-panel-active");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleLogin = async (event) => {
    if (userFormData.email && userFormData.password) {
      event.preventDefault();

      try {
        const response = await loginUser(userFormData);

        console.log(response);
        if (!response.ok) {
          alert("Please try again");
          throw new Error("Something went wrong!");
        } else {
          const { token, user } = await response.json();
          console.log(user);
          Auth.login(token);
          navigate('/selection');
        }
      } catch (error) {}
    }
  };

  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("loginForm");

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

    if (signUpButton && signInButton && container) {
      signUpButton.addEventListener("click", () => {
        container.classList.add("right-panel-active");
      });

      signInButton.addEventListener("click", () => {
        container.classList.remove("right-panel-active");
      });
    }
  }, []);

  return (
    <div>
      
      <h1 className="CQfont homeTitle mb-5 mt-3">Cosmic Quest</h1>

      <div className="container" id="loginForm">
        <div className="form-container sign-up-container">
          <form className="formBox">
            <h1 className="CQfont">Sign Up</h1>

            <input
              type="text"
              placeholder="Username"
              className="inputField"
              name="username"
              value={userFormData.username}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={userFormData.email}
              onChange={handleInputChange}
              className="inputField"
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={userFormData.password}
              onChange={handleInputChange}
              className="inputField"
              required
            />
            <button
              onClick={handleSignUp}
              className="CQfont mt-3 formButton"
              id="signUpForm"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#" className="formBox">
            <h1 className="CQfont">Login</h1>

            <span className="CQfont formText">or sign up to create an account</span>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
              value={userFormData.email}
              className="inputField"
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
              value={userFormData.password}
              className="inputField"
              required
            />
            <button
              onClick={handleLogin}
              className="CQfont mt-3 formButton"
              id="signInForm"
            >
              Login
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="CQfont">Welcome Back!</h1>
              Login to play
              <button className="ghost CQfont mt-3 formButton" id="signIn">
                Login
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="CQfont">Hello, Friend!</h1>

              <button className="ghost CQfont mt-3 formButton" id="signUp">
                Sign Up
              </button>

            </div>
          </div>
        </div>
      </div>
            {/* audio start */}
            {/* <div className="audio-container">
            <audio autoplay loop id="game-audio">
              <source src={`/soundscape/cosmic quest general space ambiance.mp3?t=${new Date().getTime()}`} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <button id="stop-audio" title="pause audio" className="ghost CQfont formButton" style={{padding:"5px", margin:"3px"}}>⏸</button>
            <button id="play-audio" title="play audio" className="ghost CQfont formButton" style={{padding:"5px", margin:"3px"}}>▶</button>
          </div> */}

          <div className="audio-container">
        <audio autoPlay loop id="game-audio">
          <source src={`/soundscape/cosmic quest general space ambiance.mp3?t=${new Date().getTime()}`} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <button id="stop-audio" title="pause audio" className="ghost CQfont formButton" style={{ padding: "5px", margin: "3px" }}>
          ⏸
        </button>
        <button id="play-audio" title="play audio" className="ghost CQfont formButton" style={{ padding: "5px", margin: "3px" }}>
          ▶
        </button>
      </div>
          {/* audio end */}


    </div>
  );
};

export default Home;
