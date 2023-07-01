import React from "react";
import { useNavigate } from "react-router-dom";
import './Principal.css'

function Principal() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/newgame/'; 
    navigate(path);
  }
  const routeChange_2 = () =>{ 
    let path = '/joingame/'; 
    navigate(path);
  }
  return (
    <>
    <h1>Principal</h1>
    <p className="Frase">¡La competencia por el pescado! En este juego de tres rondas debes ser el primer gato en recolectar las banderas para coronarte como el ganador ¡Elige tu personaje con cuidado!</p>
    <div class="cdiv">
      <div>
        <img src="/gato_normal.png" class="imagenp"></img>
      </div>
      <div>
        <img src="/gato_pirata.png" class="imagenp"></img>
      </div>
      <div>
        <img src="/gato_bruja.png" class="imagenp"></img>
      </div>
    </div>
    <div class="boton">
      <button onClick={routeChange}>Crear Partida</button>
      <button onClick={routeChange_2}>Unirse a Partida</button>
    </div>
    </>
  )
}

export default Principal;