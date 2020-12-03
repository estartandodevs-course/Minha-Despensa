import React from 'react';
import { EmptyList } from '../../components/empty-list/empty-list'
import { SearchBar } from '../../components/search-bar/search-bar'
import { Header } from '../../components/header/header';
import { itens } from "../../_mocks/mocks.jsx"
import { Item } from '../../components/item/item';
import { Navbar } from '../../components/navbar/navbar';

export function MinhaDespensa() {   
  const pesoItens = itens.length 
  
    return(
        <>
          <Header text="Despensa"/> 
          <SearchBar/>
          
            { pesoItens === 0 ?

            <EmptyList description="Ops! A sua despensa está vazia."
            subTitle="Que tal adicionar itens agora?" />
            
            :itens.map((item)=>{
            return <Item src={item.src} alt={item.alt} name={item.name} qnt={item.qnt} stateItem={item.stateItem} date={item.date}/>})
          }

          <Navbar />
        </>
  )
}

