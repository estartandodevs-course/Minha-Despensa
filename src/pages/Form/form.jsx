import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/header/header'
import { Navbar } from '../../components/navbar/navbar'
import { Calendar } from '../../components/inputs-form/calendar/calendar'
import { Checkbox } from '../../components/inputs-form/checkbox/checkbox'
import { ProductName } from '../../components/inputs-form/product-name/product-name'
import { DropDownAb } from '../../components/inputs-form/dropdown/drop-down';
import { Quant } from '../../components/inputs-form/input-quant/input-quant'
  const medidas = [ 'pct', 'kg', 'g', 'cx' ]
  const categorias = ['Limpeza', 'Mercearia', 'Perfumaria']
export function FormItens() {

  return (
    <>
    <Header text="Inserir item na despensa"/> 
    
      <ProductName/>
      <div style={{display: 'flex'}} >
      <Quant/>
      <DropDownAb 
        className='w190'
        arrowWidth='arrow190'
        title='Unidade de medida:' 
        placeholder='Unidades' 
        options={medidas} 
      />
      </div>
      <Calendar/>
      <DropDownAb 
        className='w328'
        arrowWidth='arrow328'
        title='Categoria:' 
        placeholder='Escolha uma categoria' 
        options={categorias} 
      />
      <Checkbox/>
    
      
      <Navbar />

    </>
  )
}
