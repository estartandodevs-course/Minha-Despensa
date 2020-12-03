import React from 'react';
import { EmptyList } from '../../components/empty-list/empty-list';
import { SearchBar } from '../../components/search-bar/search-bar'
import { Navbar } from '../../components/navbar/navbar';
import { Header } from '../../components/header/header';


export function DespensaVazia() {
  return (
    <>
    <Header text="Despensa"/>
      <SearchBar/>
      <EmptyList
        description="Ops! A sua despensa está vazia."
        subTitle="Que tal adicionar itens agora?"
      />
      <Navbar />
    </>
  )
}
// OBSERVAÇÃO, ESSA PAGINA ESTÁ INUTILIZADA