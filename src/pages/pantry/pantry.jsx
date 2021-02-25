import React from "react";
import { EmptyList } from "../../components/empty-list/empty-list";
import { SearchBar } from "../../components/search-bar/search-bar";
import "./pantry.scss";
import { Item } from "../../components/item/item";
import imgMercearia from "../../assets/icons/form-icons/category/refinado.svg";
import imgLimpeza from "../../assets/icons/form-icons/category/limpeza.svg";
import imgPerfumaria from "../../assets/icons/form-icons/category/perfumaria.svg";
import { useHistory } from "react-router-dom";
import { useCount } from '../../context/count'

export function MinhaDespensa() {
  const { productsObjects } = useCount(false)
  const { currentId , setCurrentId } = useCount()
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
                // function Img() {
                //   if (productsObjects[id].category === "Mercearia") {
                //     return imgMercearia;
                //   }
                //   if (productsObjects[id].category === "Limpeza") {
                //     return imgLimpeza;
                //   }
                //   if (productsObjects[id].category === "Perfumaria") {
                //     return imgPerfumaria;
                //   }
                // }
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
