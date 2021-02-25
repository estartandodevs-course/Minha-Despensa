import React from "react";
import { EmptyList } from "../../components/empty-list/empty-list";
import { SearchBar } from "../../components/search-bar/search-bar";
import "./pantry.scss";
import { Item } from "../../components/item/item";

import { useHistory } from "react-router-dom";
import { useCount } from '../../context/count'

export function MinhaDespensa() {
  const { productsObjects } = useCount(false)
  const { setCurrentId } = useCount()
  const history = useHistory();
  return (
    <>
      <SearchBar />
      {productsObjects === false ? (
        <EmptyList
        description="Ops! A sua despensa está vazia."
        subTitle="Que tal adicionar itens agora?"
        />
        ) : (
          <main className="container-itens">
            {
              Object.keys(productsObjects).map((id) => {
                function handleClick() {
                  setCurrentId(id)
                  history.push("/inserir-item", {
                    
                  });
                }
                
                return (
                  <Item
                    onClick={handleClick}
                    key={id}
                    name={productsObjects[id].name}
                    quantity={productsObjects[id].quantity}
                    status={productsObjects[id].status}
                    expirationDate={productsObjects[id].expirationDate}
                    imageSrc={productsObjects[id].imageSrc}
                  />
                );
              })
            }
          </main>
        )}
    </>
  )
}
