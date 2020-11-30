import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar } from '../../components/navbar/navbar';
import { Menu } from '../../components/header/menu/menu';
import { Arrow } from '../../components/header/arrow/arrow'
import { Title } from '../../components/header/title/title'

export function FormItens() {
  return (
    <>
      <div className="container">
        <div className="mock">
          <div className="container-header">
            <Arrow/>
            <Title text="Inserir item na despensa" />
            <Menu/>
          </div>
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