import React from 'react'
import Dropdown from 'react-dropdown';
import '../../components/inputs-form/dropdown/drop-down.scss'
import { Link } from 'react-router-dom'
import { Header } from '../../components/header/header'
import { Navbar } from '../../components/navbar/navbar'

export function FormItens() {
  const options = ['pct', 'kg', 'g', 'cx']
  const defaultOption = options[0];
  return (
    <>
    <Header text="Inserir item na despensa"/> 

      <Link to="/">
        <p>voltar para home</p>
      </Link>
    <Dropdown 
      className='drop' 
      placeholderClassName='place' 
      menuClassName='options'
      controlClassName='control'
      arrowClassName='arrow'
      options={options} /* onChange={this._onSelect} */ value={defaultOption} placeholder="Unidades" />


      <Navbar />
    </>
  )
}