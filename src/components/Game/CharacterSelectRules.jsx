import CharacterRules from './CharacterRules.jsx'
import './CharacterSelect.css'
import React from 'react'

export default function CardRules({imgSrc}){
    const characters = [{id:1, imgSrc:'/gato_normal.png'},{id:2, imgSrc:'/gato_pirata.png'},{id:3, imgSrc:'/gato_bruja.png'}]
return (
<>
<div className="board">
<div className="board-row">
{characters.map(character=> (
<CharacterRules key={character.id} imgSrc={character.imgSrc}/>
))} 
</div>
</div>
</>
)
}