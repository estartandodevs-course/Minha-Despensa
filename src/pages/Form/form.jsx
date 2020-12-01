import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/header/header'
import { Navbar } from '../../components/navbar/navbar'

export function FormItens() {
  return (
    <>
      <h1>FORMULARIO</h1>
      <Link to="/">
        <p>voltar para home</p>
      </Link>
      <Navbar />
    </>
  )
}