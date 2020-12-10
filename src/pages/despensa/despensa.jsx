import React from 'react';
import { EmptyList } from '../../components/empty-list/empty-list'
import { SearchBar } from '../../components/search-bar/search-bar'
import { Header } from '../../components/header/header';
import { itens } from "../../_mocks/mocks.jsx"
import { Item } from '../../components/item/item';
import { Navbar } from '../../components/navbar/navbar';

export function MinhaDespensa() {   
  const isEmpty = itens.length === 0;
    return(
        <>
          <Header text="Despensa"/> 
          <SearchBar/>
          
            { isEmpty  ?

            <EmptyList description="Ops! A sua despensa está vazia."
            subTitle="Que tal adicionar itens agora?" />
            
            :itens.map((item)=>{
            return <Item key={item.index} src={item.src} alt={item.alt} name={item.name} qnt={item.qnt} stateItem={item.stateItem} date={item.date}/>})
          }
          <Navbar />
        </>
  )
}

