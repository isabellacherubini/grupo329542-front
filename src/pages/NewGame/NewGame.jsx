import CharacterSelect from "../../components/Game/CharacterSelect";
import './NewGame.css'
import React, {createContext, useContext , useState, useEffect} from "react";
import axios from 'axios';
import { AuthContext } from '../../auth/AuthContext';
import API_URL from "../../config.js";


export default function NewGame() {
    const [info, setInfo] = useState({});
    useEffect(() => {
      console.log(`Haciendo el request a ${API_URL}/games`);
      axios.post(`${API_URL}/games`)
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
        <div>
          <CharacterSelect key={info.gameId} gameid={info.gameId}/>
        </div>
        );
  }