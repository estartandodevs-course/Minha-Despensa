import React from 'react';
import { Link } from "react-router-dom";
import { Item } from '../../components/item/item';
import { Navbar } from '../../components/navbar/navbar';

export function MinhaDespensa() {
  const itens=[{src: "https://www.clubeextra.com.br/img/uploads/1/246/596246.png", alt: "arroz", name: "Arroz", qnt:2, stateItem: "Aberto", date:"30/11/2020"},{src: "https://www.clubeextra.com.br/img/uploads/1/348/590348.png", alt: "feijão", name: "Feijão", qnt:5, stateItem: "Fechado", date:"30/11/2021"}]
    
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