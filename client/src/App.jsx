// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
