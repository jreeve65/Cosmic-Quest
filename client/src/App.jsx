// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import spaceVideo from "../public/CQ-Content/space.mp4";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div className="content-container">
      <video className="background-video" loop autoPlay muted>
        <source src={spaceVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
