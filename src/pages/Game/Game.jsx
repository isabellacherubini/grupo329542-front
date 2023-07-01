import Board from "../../components/Game/Board";
import React, {createContext, useContext , useState, useEffect} from "react";
import axios from 'axios';
import { AuthContext } from '../../auth/AuthContext';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import API_URL from "../../config.js";

export default function Game() {
    const {id, tipo, playerid} = useParams();
    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/play/${id}/${playerid}`; 
    navigate(path);
  }
  const routeChange2 = () =>{
    navigate(0);
  }
    
    const [status, setStatus] = useState({}); 
    var players = [];
    console.log(`Haciendo el request a ${API_URL}/players`);
      function get() {
        axios.get(`${API_URL}/players/game/${id}`).then(function(response) {
            if (response.data.length !=3) {  
              get();
            } else {
                players.push(response.data[0].type,response.data[0].position);
                players.push(response.data[1].type,response.data[1].position);
                players.push(response.data[2].type,response.data[2].position);
                return
            }
        });
      }
    
      get();
   
      console.log(`Haciendo el request a ${API_URL}/games/${id}`);
      useEffect(() => {axios.get(`${API_URL}/games/${id}`)
      .then((response) => {
        const data = response.data;
        console.log(data);
        setStatus(data);
      })
      .catch((error) => {
        console.log(error);
      });}, [])

      return (
        <>
        {(status.winner == "" && status.turn == 0 && tipo == "pirata") &&
          <button onClick={routeChange}>Tirar dado</button>
        }
        {(status.winner == "" && status.turn == 1 && tipo == "normal") &&
          <button onClick={routeChange}>Tirar dado</button>
        }
        {(status.winner == "" && status.turn == 2 && tipo == "bruja") &&
          <button onClick={routeChange}>Tirar dado</button>
        }
        {(status.winner != "") &&
          <p>Ganador: {status.winner}</p>
        }
        <button onClick={routeChange2}>Actualizar tablero</button>
        <Board key={id} id={id}/>
        
        </>

        );
  }