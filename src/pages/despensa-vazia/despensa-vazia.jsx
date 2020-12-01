import React from 'react';


import { EmptyList } from '../../components/empty-list/empty-list';
import { SearchBar } from '../../components/search-bar/search-bar'
import { Navbar } from '../../components/navbar/navbar';

import { Title } from '../../components/header/title/title';
import { Arrow } from '../../components/header/arrow/arrow';
import { Header } from '../../components/header/header';


export function DespensaVazia() {
  return (
    <>
      <SearchBar/>
      <EmptyList
        description="Ops! A sua despensa está vazia."
        subTitle="Que tal adicionar itens agora?"
      />
      <Navbar />
    </>
  )
}