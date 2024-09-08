import lostSpace from "../assets/images/lostInSpace.jpg";
const Error = () => {
  return (
    <div>
      <div class="container">
        <div style={{
            backgroundImage: `url(${lostSpace})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",}} >
          <h1 class="CQfont errorTitle mb-5 mt-3">Lost in the Cosmos (404)</h1>
          <p class=" CQfont errorMessage">
            It seems you've ventured into uncharted territory. We couldn't find
            the page you were looking for or that feature doesnt exist yet, but don't worry, the universe is vast
            and full of mysteries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
