import React from "react";
import { EmptyList } from "../../components/empty-list/empty-list";
import { SearchBar } from "../../components/search-bar/search-bar";
import "./despensa.scss";
// import { itens } from "../../_mocks/mocks.jsx";
import { Item } from "../../components/item/item";
import { useHistory } from "react-router-dom";

export function MinhaDespensa() {
  const history = useHistory();
  const itens = JSON.parse(localStorage.getItem("Item"));
  const isEmpty = itens === null;
  return (
    <>
      <SearchBar />

      {isEmpty ? (
        <EmptyList
          description="Ops! A sua despensa está vazia."
          subTitle="Que tal adicionar itens agora?"
        />
      ) : (
        <main className="container-itens">
          {itens.map((item, index) => {
            function handleClick() {
              history.push("/inserir-item", {
                item,
              });
            }

            return (
              <Item
                onClick={handleClick}
                key={index}
                src={item.src}
                alt={item.alt}
                name={item.name}
                qnt={item.qnt}
                stateItem={item.stateItem}
                date={item.date}
              />
            );
          })}
        </main>
      )}
    </>
  );
}
