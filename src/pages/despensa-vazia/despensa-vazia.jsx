import React from 'react';
import { Link } from 'react-router-dom'


import { EmptyList } from '../../components/empty-list/empty-list';
import { Navbar } from '../../components/navbar/navbar';

import { Title } from '../../components/header/title/title';
import { Arrow } from '../../components/header/arrow/arrow';
import { Header } from '../../components/header/header';


export function DespensaVazia() {
  return (
    <>
      <div className="container">
        <div className="mock">

            <Header text="Despensa"/>
            
            
          <EmptyList
          description="Ops! A sua despensa está vazia."
          subTitle="Que tal adicionar itens agora?"
          />
          <Link to="/despensa">

          </Link>
        </div>  
        <Navbar />
      </div>   
       
    </>
  )
}