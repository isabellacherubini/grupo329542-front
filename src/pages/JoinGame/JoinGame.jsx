import React, {createContext, useContext , useState, useEffect} from "react";
import axios from 'axios';
import { AuthContext } from '../../auth/AuthContext';
import { useNavigate } from "react-router-dom";
import './JoinGame.css';
import API_URL from "../../config.js";

function JoinGame() {
    let navigate = useNavigate(); 
    const routeChange = (id) =>{ 
        let path = `/selectgame/${id}/`; 
        navigate(path);
      }
const [games, setGames] = useState({});
  useEffect(() => {
    console.log(`Haciendo el request a ${API_URL}/games/info`);
    axios.get(`${API_URL}/games/info`)
      .then((response) => {
        const data = response.data;
        console.log(data);
        setGames(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])
  return (
    <>
    {Object.values(games).map(games=> (
          <button onClick={() => {routeChange(games.id)}}>{games.id}</button>
        ))}
    </>
  )
}

export default JoinGame;