import React from 'react'
import arrow from '../../assets/icons/arrow.svg'

import './card.scss'

export function Card(props){
    //const {titulo, children, qntde, source} = props

    const titulo = props.title
    const texto = props.children
    const qntde = props.qnt
    const source = props.src
    
    

    return (
    <> 
        {/*<img src={carrinho} />*/} 

        <button style={{backgroundColor: props.color}}>
            <h1 className="title" >{titulo}</h1>
             <p className="text">{texto}</p>
            <p className="qnt" >{qntde}:</p> 
            <img className="arrow" src={arrow} alt="Flecha"/>
            <img className="abso" src={source} alt="Legumes"/>
        </button>
    </>
    )
}

