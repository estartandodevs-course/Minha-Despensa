import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/header/header'
import { Navbar } from '../../components/navbar/navbar'
//import { DropDownAb } from '../../components/inputs-form/dropdown/drop-down';
  //const medidas = [ 'pct', 'kg', 'g', 'cx' ]
  //const categorias = ['Limpeza', 'Mercearia', 'Perfumaria']
export function FormItens() {

  return (
    <>
    <Header text="Inserir item na despensa"/> 
      <Link to="/">
        <p>voltar para home</p>
      </Link>
    
      {/* <DropDownAb 
        className='w190'
        arrowWidth='arrow190'
        title='Unidade de medida:' 
        placeholder='Unidades' 
        options={medidas} 
      /> */}
      
      {/* <DropDownAb 
        className='w328'
        arrowWidth='arrow328'
        title='Categoria:' 
        placeholder='Escolha uma categoria' 
        options={categorias} 
      /> */}
      <Navbar />

    </>
  )
}
