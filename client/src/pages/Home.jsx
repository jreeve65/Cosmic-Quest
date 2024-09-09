import spaceVideo from "../assets/videos/space.mp4";
const Home = () => {
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('loginForm');

  signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
  });

  signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
  });

  return (
    <div>
      <video class="video" loop="true" autoplay="autoplay" preload="true" muted>
        <source src={spaceVideo} type="video/mp4" />
      </video>
      <h1 class="CQfont homeTitle mb-5 mt-3">Cosmic Quest</h1>

      <div class="container" id="loginForm">
        <div class="form-container sign-up-container">
          <form action="#" class="formBox">
            <h1 class="CQfont">Sign Up</h1>

            <input type="text" placeholder="Username" class="inputField" />
            <input type="email" placeholder="Email" class="inputField" />
            <input type="password" placeholder="Password" class="inputField" />
            <button class="CQfont mt-3 formButton">Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form action="#" class="formBox">
            <h1 class="CQfont">Login</h1>

            <span class="CQfont formText">or sign up to create an account</span>
            <input type="email" placeholder="Email" class="inputField" />
            <input type="password" placeholder="Password" class="inputField" />
            <button class="CQfont mt-3 formButton">Login</button>
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
