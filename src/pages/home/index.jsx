import React from 'react'
import { Card } from '../../components/card'
import { Navbar } from '../../components/navbar/navbar'

export function HomePage(){
    return (
        <>
        <div>
            <Card  title="Despensa" text="Confira todos os itens disponíveis na sua despensa ou adicione novos!" qnt="Quantidade de itens:" />
        </div>
        </>
    )
}
