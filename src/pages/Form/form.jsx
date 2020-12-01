import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/header/header'
import { Navbar } from '../../components/navbar/navbar'

export function FormItens() {
  return (
    <>
      <div className="container">
        <div className="mock">
          <Header text="Inserir item na despensa"/>
          <h1>FORMULARIO</h1>
          <Link to="/">
            <p>voltar para home</p>
          </Link>
        </div>
        <Navbar />
      </div>
    </>
  )
}