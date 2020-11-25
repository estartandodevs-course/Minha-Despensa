import React from 'react'
import './card.scss'

export function Card(props){
    const titulo = props.title
    const texto = props.text
    const qntde = props.qnt
    return (
        <button>
            <h1 className="title" >{titulo}</h1>
             <p className="text">{texto}</p>
            <p className="qnt" >{qntde}:</p> 
        </button>
    )
}