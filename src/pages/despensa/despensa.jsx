import React from "react";
import { EmptyList } from "../../components/empty-list/empty-list";
import { SearchBar } from "../../components/search-bar/search-bar";
import "./despensa.scss";
import { itens } from "../../_mocks/mocks.jsx";
import { Item } from "../../components/item/item";

export function MinhaDespensa() {
  const isEmpty = itens.length === 0;
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
            return (
              <Item
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
