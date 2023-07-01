import Character from './Character.jsx'
import './CharacterSelect.css'
import React from 'react'

export default function Card({imgSrc, gameid}){
    const characters = [{id:1, imgSrc:'/gato_normal.png'},{id:2, imgSrc:'/gato_pirata.png'},{id:3, imgSrc:'/gato_bruja.png'}]
return (
<>
<div className="board">
<div className="board-row">
{characters.map(character=> (
<Character key={character.id} imgSrc={character.imgSrc} gameid={gameid}/>
))} 
</div>
</div>
</>
)
}