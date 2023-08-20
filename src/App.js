import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter,createHashRouter } from 'react-router-dom';

import LayOut from './components/LayOut/LayOut';
import Home from './components/Home/Home';
import Platforms from './components/Platforms/Platforms';
import Categories from './components/Categories/Categories';
import All from './components/All/All';
import SortBy from './components/SortBy/SortBy';
import Details from './components/Details/Details';
import PC from './components/PC/PC'
import Browser from './components/Browser/Browser';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ReleaseDate from './components/ReleaseDate/ReleaseDate';
import Popularity from './components/Popularity/Popularity';
import Relevance from './components/Relevance/Relevance';
import Alphabetical from './components/Alphabetical/Alphabetical';
import Racing from './components/Racing/Racing';
import Social from './components/Social/Social';
import Sports from './components/Sports/Sports';
import Shooter from './components/Shooter/Shooter';
import OpenWorld from './components/OpenWorld/OpenWorld';
import Zombie from './components/Zombie/Zombie';
import Fantasy from './components/Fantasy/Fantasy';
import ActionRpg from './components/ActionRPG/ActionRPG';
import Action from './components/Action/Action';
import Flight from './components/Flight/Flight';
import BattleRoyale from './components/BattleRoyale/BattleRoyale';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';


function App() {

  let routers = createHashRouter([
    {
      path: '', element: <LayOut />, children: [
        { index: true, element: <Home /> },
        { path: 'login', element: <Login /> },
        { path: 'signup', element: <Signup /> },
        { path: 'all', element: <All /> },
        { path: 'platform', element: <Platforms /> },
        { path: 'sort-by', element: <SortBy /> },
        { path: 'categories', element: <Categories /> },
        { path: 'details/:id', element: <Details /> },
        { path: 'pc', element: <PC /> },
        { path: 'browser', element: <Browser /> },
        { path: 'release-Date', element: <ReleaseDate /> },
        { path: 'popularity', element: <Popularity /> },
        { path: 'alphabetical', element: <Alphabetical /> },
        { path: 'relevance', element: <Relevance /> },
        { path: 'racing', element: <Racing /> },
        { path: 'sports', element: <Sports /> },
        { path: 'social', element: <Social /> },
        { path: 'shooter', element: <Shooter /> },
        { path: 'open-World', element: <OpenWorld /> },
        { path: 'zombie', element: <Zombie /> },
        { path: 'fantasy', element: <Fantasy /> },
        { path: 'action-Rpg', element: <ActionRpg /> },
        { path: 'action', element: <Action /> },
        { path: 'flight', element: <Flight /> },
        { path: 'battle-Royale', element: <BattleRoyale /> },

        {path:'*' , element :<ErrorPage/>},

      ]
    }
  ])
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>


  );
}
// npx generate-react-cli component
export default App;
