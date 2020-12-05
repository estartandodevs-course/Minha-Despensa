import React from 'react'
import { Header } from '../../components/header/header'
import { Quant } from '../../components/inputs-form/input-quant/input-quant'
import { Navbar } from '../../components/navbar/navbar'


export function FormItens() {
  return (
    <>
      <Header text="Inserir item na despensa" />
      <Quant />
      <Navbar />

    </>
  )
}