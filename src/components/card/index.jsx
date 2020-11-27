import React from 'react'

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
            <img className="abso" src={source}/>
        </button>
    </>
    )
}

