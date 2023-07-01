import {
  createBrowserRouter,
  RouterProvider,
  redirect
} from 'react-router-dom';
import Layout from './pages/Layout';
import AboutUs from './pages/AboutUs/AboutUs';
import LandingPage from './pages/LandingPage/LandingPage';
import Principal from "./pages/Principal/Principal.jsx";
import Rules from "./pages/Rules/Rules.jsx";
import Login from "./pages/Profile/Login.jsx";
import Signup from "./pages/Profile/Signup.jsx";
import NewGame from './pages/NewGame/NewGame.jsx';
import Game from './pages/Game/Game.jsx';
import JoinGame from './pages/JoinGame/JoinGame.jsx'
import SelectPlayer from './pages/JoinGame/SelectCharacterGame';
import Play from './pages/Game/Play.jsx';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <LandingPage />
        },
        {
          path: 'about-us',
          element: <AboutUs />
        },
        {
          path: 'principal',
          element: <Principal/>
        },
        {
          path: 'rules',
          element: <Rules/>
        },
        {
          path: 'login',
          element: <Login/>
        },
        {
          path: 'signup',
          element: <Signup/>
        },
        {
          path: 'newgame',
          element: <NewGame/>
        },
        {
          path: 'game/:id/:tipo/:playerid',
          element: <Game/>
        },
        {
          path: 'joingame',
          element: <JoinGame/>
        },
        {
          path: 'selectgame/:id',
          element: <SelectPlayer/>
        },
        {
          path: 'play/:gameid/:playerid',
          element: <Play/>
        }
      ]
    },
    {
      path: '*', 
      loader: () => {
        return redirect('/')
      }
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default Router;