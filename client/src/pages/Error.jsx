import lostSpace from "../assets/images/lostInSpace.jpg";

const Error = () => {
  return (
    <div>
      <div className="container-fluid">
        <div
          className="row"
          style={{
            backgroundImage: `url(${lostSpace})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
          }}
        >
          <h1 className="CQfont errorTitle">Lost in the Cosmos (404)</h1>
          <p className="CQfont errorMessage">
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
