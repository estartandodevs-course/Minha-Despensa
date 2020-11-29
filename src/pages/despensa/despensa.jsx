import React from 'react';
import { Link } from "react-router-dom";
import { Item } from '../../components/item/item';
import { Navbar } from '../../components/navbar/navbar';

export function MinhaDespensa() {
  return(
    <>
      <div className="container">
          <div className="mock">
            <h1>despensa</h1>
            <Item src={"https://a-static.mlcdn.com.br/1500x1500/feijao-vermelho-meu-biju-500g/armazemtiojoao/5919/2d6872586f368875657814edc53d2c65.jpg"} alt={"feijão"} name={"Feijão"} qnt={2} stateItem={"fechado"} date={"22/02/2020"}/>
            <Item src={"https://a-static.mlcdn.com.br/1500x1500/feijao-vermelho-meu-biju-500g/armazemtiojoao/5919/2d6872586f368875657814edc53d2c65.jpg"} alt={"feijão"} name={"Feijão"} qnt={2} stateItem={"fechado"} date={"22/02/2020"}/>
            <Navbar />
          </div>  
          
      </div>    
    </>
  )
}