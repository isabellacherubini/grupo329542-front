import './Square.css'
import React from 'react'

export default function Square({id,desc,imgSrc}){
    return(
        <div className='square'>
            <div className="square-container">
            <p>Ganas {desc} puntos</p>
            <img src={imgSrc} className="img" alt="ficha"/>
            <p>{id+1}</p>
            </div>
        </div>
    )
}