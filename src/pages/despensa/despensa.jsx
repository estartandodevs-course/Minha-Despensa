import React from 'react';
import { itens } from "../../_mocks/mocks.jsx"
import { Item } from '../../components/item/item';
import { Navbar } from '../../components/navbar/navbar';

export function MinhaDespensa() {    
  return(
    <>
      <div className="container">
          <div className="mock">
            <h1>despensa</h1>
            {itens.map((item)=>{
            return <Item src={item.src} alt={item.alt} name={item.name} qnt={item.qnt} stateItem={item.stateItem} date={item.date}/>})}
            <Navbar />
          </div>  
          
      </div>    
    </>
  )
}