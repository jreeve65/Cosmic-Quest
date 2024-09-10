import spaceVideo from "../assets/videos/space.mp4";
import React, { useEffect } from "react";
import { createUser, loginUser } from "../services/API";
import Auth from "../services/auth";
import { useState } from "react";
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
          throw new Errow("Something went wrong!");
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
      <video class="video" loop="true" autoPlay="autoPlay" preload="true" muted>
        <source src={spaceVideo} type="video/mp4" />
      </video>
      <h1 class="CQfont homeTitle mb-5 mt-3">Cosmic Quest</h1>

      <div class="container" id="loginForm">
        <div class="form-container sign-up-container">
          <form class="formBox">
            <h1 class="CQfont">Sign Up</h1>

            <input
              type="text"
              placeholder="Username"
              class="inputField"
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
              class="inputField"
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={userFormData.password}
              onChange={handleInputChange}
              class="inputField"
              required
            />
            <button
              onClick={handleSignUp}
              class="CQfont mt-3 formButton"
              id="signUpForm"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form action="#" class="formBox">
            <h1 class="CQfont">Login</h1>

            <span class="CQfont formText">or sign up to create an account</span>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
              value={userFormData.email}
              class="inputField"
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
              value={userFormData.password}
              class="inputField"
              required
            />
            <button
              onClick={handleLogin}
              class="CQfont mt-3 formButton"
              id="signInForm"
            >
              Login
            </button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1 class="CQfont">Welcome Back!</h1>
              Login to play
              <button class="ghost CQfont mt-3 formButton" id="signIn">
                Login
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1 class="CQfont">Hello, Friend!</h1>

              <button class="ghost CQfont mt-3 formButton" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
