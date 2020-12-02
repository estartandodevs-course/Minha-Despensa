import React from 'react';
import { Header } from '../../components/header/header';
import { itens } from "../../_mocks/mocks.jsx"
import { Item } from '../../components/item/item';
import { Navbar } from '../../components/navbar/navbar';

export function MinhaDespensa() {    
  return(
    <>
      <Header text="Despensa"/> 
      {itens.map((item)=>{
       return <Item src={item.src} alt={item.alt} name={item.name} qnt={item.qnt} stateItem={item.stateItem} date={item.date}/>})}
       <Navbar />
    </>
  )
}
