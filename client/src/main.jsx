import ReactDOM from 'react-dom/client'
import './App.css';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
// import Error from './pages/Error'; 
import Home from './pages/Home'; 
// import Selection from './pages/Selection'; 
// import GameCQ from './pages/GameCQ'; 



// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />, 
      },
      // {
      //   path: '/selection',
      //   element: <Selection />
      // }, 
      // {
      //   path: '/gamecq',
      //   element: <GameCQ />

      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
