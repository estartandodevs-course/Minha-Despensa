import React from "react";
import { Card } from "../../components/card/card";
import { Link } from "react-router-dom";
import despensa from "../../assets/img/img-legumes.svg";
import carrinho from "../../assets/img/img-carrinho.svg";

export function HomePage() {
  return (
    <>
      <Link to="/despensa">
        <Card
          title="Despensa"
          qnt="Quantidade de itens:"
          src={despensa}
          color="#83A390"
          text="Confira todos os itens disponíveis na sua despensa ou adicione novos!"
        />
      </Link>

      <Link to="/despensa">
        <Card
          title="Lista de Compra"
          qnt="Quantidade de itens:"
          src={carrinho}
          color="#D1CBBD"
          text="Lembre-se de atualizar sua lista antes de fazer as compras!"
        />
      </Link>
    </>
  );
}
