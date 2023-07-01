import './Character.css'
import React, {createContext, useContext , useState, useEffect} from "react";
import axios from 'axios';
import { AuthContext } from '../../auth/AuthContext';
import { useNavigate } from "react-router-dom";
import API_URL from "../../config.js";


export default function Character({imgSrc, gameid}){
    const [player, setPlayer] = useState({});
    let navigate = useNavigate(); 
    var tipo = "";
    var id = gameid;
    if (imgSrc == '/gato_normal.png'){
        tipo="normal";
    }
    else if (imgSrc == '/gato_pirata.png'){
        tipo="pirata";
    }
    else{
        tipo="bruja";
    }
    const createCharacter = () =>{
         axios.post(`${API_URL}/players`, {
            type:tipo,
            points:0,
            position:0,
            userId:1,
            gameId:id
          })
          .then((response) => {
            const data = response.data;
            console.log(data);
            setPlayer(data);
            let path = `/game/${id}/${tipo}/${response.data.id}`; 
            navigate(path);
          })
          .catch((error) => {
            console.log(error);
          });
    }

    return(
        <div className='character'>
            <button onClick={createCharacter}><img src={imgSrc} className="img" alt="avatar"/></button>
        </div>
    )
}