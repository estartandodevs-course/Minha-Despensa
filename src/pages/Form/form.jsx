import React from 'react';
import { Link } from 'react-router-dom'

export function FormItens() {
  return (
    <>
      <div className="container">
        <div className="mock">
          <h1>FORMULARIO</h1>
          <Link to="/">
            <p>voltar para home</p>
          </Link>
        </div>
      </div>
    </>
  )
}