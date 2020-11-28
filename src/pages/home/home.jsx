import React from 'react'
import {Card} from '../../components/card/index'
import { Link } from "react-router-dom";
import { Navbar } from '../../components/navbar/navbar';
import despensa from '../../assets/img/img-legumes.svg'
import carrinho from '../../assets/img/img-carrinho.svg'

export function HomePage(){    
    return (
        <>
          <div className="container">
            <div className="mock">
              <Link to="/despensavazia">
                <Card  title="Despensa" qnt="Quantidade de itens:" src={despensa} color="rgba(131, 163, 144, 0.85)">
                  Confira todos os itens disponíveis na sua despensa ou adicione novos!
                </Card>
              </Link>
              <Card  title="Lista de Compra" qnt="Quantidade de itens:" src={carrinho} color="rgba(209, 203, 189, 0.85" >
                  Lembre-se de atualizar sua lista antes de fazer as compras!
                </Card>
                <Navbar />
            </div>
          </div>
        </>
    )
}