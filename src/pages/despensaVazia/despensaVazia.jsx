import React from 'react';
import { Link } from 'react-router-dom'

import { EmptyList } from '../../components/emptyList/emptyList';
import  ImgEmptyList  from '../../assets/icons/ImgEmptyList.svg'

export function DespensaVazia() {
  return (
    <>
      <div className="container">
        <div className="mock">
          <EmptyList
          src={ImgEmptyList}
          alt="Fazendo compra"
          desc="Ops! A sua despensa está vazia."
          subTitle="Que tal adicionar itens agora?"
          />
          <Link to="/despensa">
            
          </Link>
        </div>  
      </div>    
    </>
  )
}