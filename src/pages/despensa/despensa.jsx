import React from 'react';
import { Link } from 'react-router-dom'
import { itens } from "../../_mocks/mocks.jsx"
import { Item } from '../../components/item/item';
import { Navbar } from '../../components/navbar/navbar';

export function MinhaDespensa() {    
  return(
    <>

      <h1>despensa</h1>
      <Link to="/form">IR PARA form</Link>
      {itens.map((item)=>{
       return <Item src={item.src} alt={item.alt} name={item.name} qnt={item.qnt} stateItem={item.stateItem} date={item.date}/>})}
       <Navbar />
      

    </>
  )
}
