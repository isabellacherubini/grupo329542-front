import Board from "../../components/Game/Board";
import React, {createContext, useContext , useState, useEffect} from "react";
import axios from 'axios';
import { AuthContext } from '../../auth/AuthContext';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import API_URL from "../../config.js";


export default function Play() {
    const {gameid ,playerid} = useParams();
    const [info, setInfo] = useState({});
    let navigate = useNavigate(); 
    const routeChange = (tipo) =>{
        axios.get(`${API_URL}/players/${playerid}`)
          .then((response) => {
            const data = response.data;
            console.log(data);
            let path = `/game/${gameid}/${response.data.type}/${playerid}`; 
            navigate(path);
          })
          .catch((error) => {
            console.log(error);
          }); 
      }
      console.log(`Haciendo el request a ${API_URL}/games/play`);
    useEffect(() => {
    axios.post(`${API_URL}/games/play`, {
        gameId: gameid,
        playerId: playerid
    })
      .then((response) => {
        const data = response.data;
        console.log(data);
        setInfo(data);
      })
      .catch((error) => {
        console.log(error);
      });
    }, [])
      return (
        <>
        <p>Obtuviste {info.dado}</p>
        <p>Tienes {info.points} puntos</p>
        <button onClick={routeChange}>Volver al tablero</button>
        </>

        );
  }