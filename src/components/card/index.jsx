import React from 'react'

import './card.scss'

export function Card(props) {
    const { title, text, qnt, src, color } = props
    return (

        <div className="container-card" style={{ backgroundColor:color }}>
            <h1>{title}</h1>
            <p className="text">{text}</p>
            <p className="qnt" >{qnt}:</p>
            <img className="abso" src={src} alt="Legumes" />
        </div>
    )
}

