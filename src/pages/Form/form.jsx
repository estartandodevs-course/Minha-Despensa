import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/header/header'
import { Navbar } from '../../components/navbar/navbar'
import { Success } from '../../components/success/success'

export function FormItens() {
  return (
    <>
    <Header text="Inserir item na despensa"/> 
      <Link to="/">
        <p>voltar para home</p>
      </Link>
      <Success />
      <Navbar />
    </>
  )
}