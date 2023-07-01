import CharacterSelect from "../../components/Game/CharacterSelect";
import React, {createContext, useContext , useState, useEffect} from "react";
import axios from 'axios';
import { AuthContext } from '../../auth/AuthContext';
import { useParams } from "react-router-dom";

export default function SelectPlayer() {
    const {id} = useParams();
    
      return (
        <div>
          <CharacterSelect key={id} gameid={id}/>
        </div>
        );
  }