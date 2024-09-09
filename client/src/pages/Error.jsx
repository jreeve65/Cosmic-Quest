import lostSpace from "../assets/images/lostInSpace.jpg";
const Error = () => {
  return (
    <div>
      <div class="container-fluid">
        <div class="row" style={{
            backgroundImage: `url(${lostSpace})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            }} >
          <h1 class="CQfont errorTitle">Lost in the Cosmos (404)</h1>
          <p class=" CQfont errorMessage">
            It seems you've ventured into uncharted territory. We couldn't find
            the page you were looking for, but don't worry, the universe is vast
            and full of mysteries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
