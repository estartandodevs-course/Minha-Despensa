import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/header/header'
import { Navbar } from '../../components/navbar/navbar'
import {Checkbox} from '../../components/checkbox/checkbox'

export function FormItens() {
  return (
    <>
    <Header text="Inserir item na despensa"/> 
    <Checkbox/>
    
      <Navbar />
    </>
  )
}