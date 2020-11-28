import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar } from '../../components/navbar/navbar';

export function FormItens() {
  return (
    <>
      <div className="container">
        <div className="mock">
          <h1>FORMULARIO</h1>
          <Link to="/">
            <p>voltar para home</p>
          </Link>
          <Navbar />
        </div>
      </div>
    </>
  )
}