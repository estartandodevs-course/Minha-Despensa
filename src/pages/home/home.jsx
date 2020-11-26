import React from 'react'
import {Card} from '../../components/card/index'
import { Link } from "react-router-dom";

export function HomePage(){
    return (
        <>
          <div className="container">
            <div className="mock">
              <Link to="/despensavazia">
                <Card  title="Despensa" text="Confira todos os itens disponíveis na sua despensa ou adicione novos!" qnt="Quantidade de itens:" />
              </Link>
            </div>
          </div>
        </>
    )
}
