import React from "react";
import { Card } from "../../components/card/card";
import { Link } from "react-router-dom";
// import despensa from "../../assets/img/img-legumes.svg";
// import carrinho from "../../assets/img/img-carrinho.svg";
import "./home.scss";
import { authConfig } from "../../auth/config";
import { useCount } from "../../context/count";




export function HomePage() {
  const { productsObjects } = useCount()
  

  const jsonItem = JSON.parse(localStorage.getItem("Item"));
  var quantItem = 0;
  if (jsonItem !== null) {
    quantItem = jsonItem.length;
  }

  return (
    <div className="home-wraper">
      <button onClick={() => authConfig.auth().signOut()}>sair</button>
      <Link to="/despensa">
        <Card
          title="Despensa"
          quantity={"Quantidade de itens: " + quantItem}
          color="#83A390"
          text="Confira todos os itens disponíveis na sua despensa ou adicione novos!"
        />
      </Link>

      {/* <Link to="/">
        <Card
          title="Lista de Compra"
          quantity="Quantidade de itens:"
          color="#D1CBBD"
          text="Lembre-se de atualizar sua lista antes de fazer as compras!"
        />
      </Link> */}
    </div>
  );
}
