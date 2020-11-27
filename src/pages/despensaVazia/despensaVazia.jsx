import React from 'react';
import { Link } from 'react-router-dom'

import { EmptyList } from '../../components/emptyList/emptyList.jsx';


export function DespensaVazia() {
  return (
    <>
      <div className="container">
        <div className="mock">
          <EmptyList
          description="Ops! A sua despensa está vazia."
          subTitle="Que tal adicionar itens agora?"
          />
          <Link to="/despensa">
            
          </Link>
        </div>  
      </div>    
    </>
  )
}