import Square from './Square.jsx'
import './Board.css'
import React from "react";

export default function BoardRules() {
    const num_squares = [{id:0, desc:'5'},{id:1, desc:'-3'},{id:2, desc:'4'},{id:3, desc:'5'},
                         {id:4, desc:'-2'},{id:5, desc:'-5'},{id:6, desc:'8'},{id:7, desc:'-8'},
                         {id:8, desc:'3'},{id:9, desc:'-2'},{id:10, desc:'4'},{id:11, desc:'-5'},
                         {id:12, desc:'5'},{id:13, desc:'-3'},{id:14, desc:'4'},{id:15, desc:'5'},
                         {id:16, desc:'-2'},{id:17, desc:'-5'},{id:18, desc:'8'},{id:19, desc:'0'}]
    return (
    
          <div className="board">
            <div className="board-row">
        {num_squares.slice(0,5).map(square=> (
          <Square key={square.id} id={square.id} desc={square.desc} imgSrc={""}/>
        ))}
        </div>
        <div className="board-row">
        {num_squares.slice(5,10).map(square=> (
          <Square key={square.id} id={square.id} desc={square.desc} imgSrc={""}/>
        ))}
        </div>
        <div className="board-row">
        {num_squares.slice(10,15).map(square=> (
          <Square key={square.id} id={square.id} desc={square.desc} imgSrc={""}/>
        ))}
        </div>
        <div className="board-row">
        {num_squares.slice(15,20).map(square=> (
          <Square key={square.id} id={square.id} desc={square.desc} imgSrc={""}/>
        ))}
        </div>
          </div>
      );
}