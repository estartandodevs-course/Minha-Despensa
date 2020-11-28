import React from 'react';

import { EmptyList } from '../../components/empty-list/empty-list';
import { SearchBar } from '../../components/search-bar/search-bar'
import { Navbar } from '../../components/navbar/navbar';


export function DespensaVazia() {
  return (
    <>
      <div className="container">
        <div className="mock">
          <SearchBar/>
          <EmptyList
          description="Ops! A sua despensa está vazia."
          subTitle="Que tal adicionar itens agora?"
          />
        </div>  
        <Navbar />
      </div>   
       
    </>
  )
}