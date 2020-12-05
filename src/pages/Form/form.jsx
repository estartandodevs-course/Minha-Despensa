import React from 'react'

import { Link } from 'react-router-dom'
import { Header } from '../../components/header/header'
import { Navbar } from '../../components/navbar/navbar'
import { DropDownAb } from '../../components/inputs-form/dropdown/drop-down';
  const options = [ 'pct', 'kg', 'g', 'cx' ]

export function FormItens() {

  return (
    <>
    <Header text="Inserir item na despensa"/> 
      <Link to="/">
        <p>voltar para home</p>
      </Link>

      <DropDownAb 
        title='Unidade de medida:' 
        placeholder='Unidades' 
        options={options} 
        width='190px'
      />
    


      <Navbar />
    </>
  )
}