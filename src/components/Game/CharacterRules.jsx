import './Character.css'
import React from 'react'


export default function Character({imgSrc}){
    return(
        <div className='character'>
            <img src={imgSrc} className="img" alt="avatar"/>
        </div>
    )
}