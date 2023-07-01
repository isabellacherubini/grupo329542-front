import Square from './Square.jsx'
import './Board.css'
import React, {createContext, useContext , useState, useEffect} from "react";
import axios from 'axios';
import { AuthContext } from '../../auth/AuthContext';
import API_URL from "../../config.js";

export default function Board({id}) {
  const [squares, setSquares] = useState({});
    console.log(`Haciendo el request a ${API_URL}/boards/squares`);
    axios.get(`${API_URL}/boards/squares/${id}`)
      .then((response) => {
        const data = response.data;
        console.log(data);
        setSquares(data);
      })
      .catch((error) => {
        console.log(error);
      });
      const [players, setPositions] = useState({})
    console.log(`Haciendo el request a ${API_URL}/players`);
        axios.get(`${API_URL}/players/game/${id}`).then((response) => {
          setPositions(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

        console.log(positions);
       
      var positions = [];
      Object.values(players).map(player=>{
        positions.push(player.type);
        positions.push(player.position);
      })
      console.log(positions[0]);
    const first_squares = Object.values(squares).slice(0,5).map(square=> {
      if ((positions[0] == "pirata" && positions[1]==square.position)||(positions[2] == "pirata" && positions[3]==square.position)||(positions[4] == "pirata" && positions[5]==square.position)){
        if ((positions[0] == "normal" && positions[1]==square.position)||(positions[2] == "normal" && positions[3]==square.position)||(positions[4] == "normal" && positions[5]==square.position)){
          if ((positions[0] == "bruja" && positions[1]==square.position)||(positions[2] == "bruja" && positions[3]==square.position)||(positions[4] == "bruja" && positions[5]==square.position)){
            return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_7.png"}/>
          } else {
            return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_4.png"}/>
          }
        } else {
          if ((positions[0] == "bruja" && positions[1]==square.position)||(positions[2] == "bruja" && positions[3]==square.position)||(positions[4] == "bruja" && positions[5]==square.position)){
            return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_6.png"}/>
          } else {
            return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_2.png"}/>
          }
        }
      } else if ((positions[0] == "normal" && positions[1]==square.position)||(positions[2] == "normal" && positions[3]==square.position)||(positions[4] == "normal" && positions[5]==square.position)){
        if ((positions[0] == "bruja" && positions[1]==square.position)||(positions[2] == "bruja" && positions[3]==square.position)||(positions[4] == "bruja" && positions[5]==square.position)){
          return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_5.png"}/>
        } else {
          return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_1.png"}/>
        }
      }
      else if ((positions[0] == "bruja" && positions[1]==square.position)||(positions[2] == "bruja" && positions[3]==square.position)||(positions[4] == "bruja" && positions[5]==square.position)){
        return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_3.png"}/>}
      else{
        return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_0.png"}/>
      }
      })
    const second_squares = Object.values(squares).slice(5,10).map(square=> {
      if ((positions[0] == "pirata" && positions[1]==square.position)||(positions[2] == "pirata" && positions[3]==square.position)||(positions[4] == "pirata" && positions[5]==square.position)){
        if ((positions[0] == "normal" && positions[1]==square.position)||(positions[2] == "normal" && positions[3]==square.position)||(positions[4] == "normal" && positions[5]==square.position)){
          if ((positions[0] == "bruja" && positions[1]==square.position)||(positions[2] == "bruja" && positions[3]==square.position)||(positions[4] == "bruja" && positions[5]==square.position)){
            return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_7.png"}/>
          } else {
            return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_4.png"}/>
          }
        } else {
          if ((positions[0] == "bruja" && positions[1]==square.position)||(positions[2] == "bruja" && positions[3]==square.position)||(positions[4] == "bruja" && positions[5]==square.position)){
            return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_6.png"}/>
          } else {
            return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_2.png"}/>
          }
        }
      } else if ((positions[0] == "normal" && positions[1]==square.position)||(positions[2] == "normal" && positions[3]==square.position)||(positions[4] == "normal" && positions[5]==square.position)){
        if ((positions[0] == "bruja" && positions[1]==square.position)||(positions[2] == "bruja" && positions[3]==square.position)||(positions[4] == "bruja" && positions[5]==square.position)){
          return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_5.png"}/>
        } else {
          return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_1.png"}/>
        }
      }
      else if ((positions[0] == "bruja" && positions[1]==square.position)||(positions[2] == "bruja" && positions[3]==square.position)||(positions[4] == "bruja" && positions[5]==square.position)){
        return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_3.png"}/>}
      else{
        return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_0.png"}/>
      }
      })
    const third_squares = Object.values(squares).slice(10,15).map(square=> {
      if ((positions[0] == "pirata" && positions[1]==square.position)||(positions[2] == "pirata" && positions[3]==square.position)||(positions[4] == "pirata" && positions[5]==square.position)){
        if ((positions[0] == "normal" && positions[1]==square.position)||(positions[2] == "normal" && positions[3]==square.position)||(positions[4] == "normal" && positions[5]==square.position)){
          if ((positions[0] == "bruja" && positions[1]==square.position)||(positions[2] == "bruja" && positions[3]==square.position)||(positions[4] == "bruja" && positions[5]==square.position)){
            return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_7.png"}/>
          } else {
            return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_4.png"}/>
          }
        } else {
          if ((positions[0] == "bruja" && positions[1]==square.position)||(positions[2] == "bruja" && positions[3]==square.position)||(positions[4] == "bruja" && positions[5]==square.position)){
            return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_6.png"}/>
          } else {
            return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_2.png"}/>
          }
        }
      } else if ((positions[0] == "normal" && positions[1]==square.position)||(positions[2] == "normal" && positions[3]==square.position)||(positions[4] == "normal" && positions[5]==square.position)){
        if ((positions[0] == "bruja" && positions[1]==square.position)||(positions[2] == "bruja" && positions[3]==square.position)||(positions[4] == "bruja" && positions[5]==square.position)){
          return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_5.png"}/>
        } else {
          return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_1.png"}/>
        }
      }
      else if ((positions[0] == "bruja" && positions[1]==square.position)||(positions[2] == "bruja" && positions[3]==square.position)||(positions[4] == "bruja" && positions[5]==square.position)){
        return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_3.png"}/>}
      else{
        return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_0.png"}/>
      }
      })
    const fourth_squares = Object.values(squares).slice(15,20).map(square=> {
      if ((positions[0] == "pirata" && positions[1]==square.position)||(positions[2] == "pirata" && positions[3]==square.position)||(positions[4] == "pirata" && positions[5]==square.position)){
        if ((positions[0] == "normal" && positions[1]==square.position)||(positions[2] == "normal" && positions[3]==square.position)||(positions[4] == "normal" && positions[5]==square.position)){
          if ((positions[0] == "bruja" && positions[1]==square.position)||(positions[2] == "bruja" && positions[3]==square.position)||(positions[4] == "bruja" && positions[5]==square.position)){
            return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_7.png"}/>
          } else {
            return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_4.png"}/>
          }
        } else {
          if ((positions[0] == "bruja" && positions[1]==square.position)||(positions[2] == "bruja" && positions[3]==square.position)||(positions[4] == "bruja" && positions[5]==square.position)){
            return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_6.png"}/>
          } else {
            return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_2.png"}/>
          }
        }
      } else if ((positions[0] == "normal" && positions[1]==square.position)||(positions[2] == "normal" && positions[3]==square.position)||(positions[4] == "normal" && positions[5]==square.position)){
        if ((positions[0] == "bruja" && positions[1]==square.position)||(positions[2] == "bruja" && positions[3]==square.position)||(positions[4] == "bruja" && positions[5]==square.position)){
          return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_5.png"}/>
        } else {
          return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_1.png"}/>
        }
      }
      else if ((positions[0] == "bruja" && positions[1]==square.position)||(positions[2] == "bruja" && positions[3]==square.position)||(positions[4] == "bruja" && positions[5]==square.position)){
        return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_3.png"}/>}
      else{
        return <Square key={square.id} id={square.position} desc={square.points} imgSrc={"/img_0.png"}/>
      }
      })
    return (
    
          <div className="board">
            <div className="board-row">
        {first_squares}
        </div>
        <div className="board-row">
        {second_squares}
        </div>
        <div className="board-row">
        {third_squares}
        </div>
        <div className="board-row">
        {fourth_squares}
        </div>
          </div>
      );
}