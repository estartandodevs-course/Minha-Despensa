import React, { useState } from "react";
import { EmptyList } from "../../components/empty-list/empty-list";
import { SearchBar } from "../../components/search-bar/search-bar";
import imgMercearia from "../../assets/icons/form-icons/category/refinado.svg";
import imgLimpeza from "../../assets/icons/form-icons/category/limpeza.svg";
import imgPerfumaria from "../../assets/icons/form-icons/category/perfumaria.svg";
import "./pantry.scss";
// import { itens } from "../../_mocks/mocks.jsx";
import { Item } from "../../components/item/item";
import { useHistory } from "react-router-dom";

export function MinhaDespensa() {
  const history = useHistory();
  const itens = JSON.parse(localStorage.getItem("Item"));
  const isEmpty = itens === null;

  const [search, setSearch] = useState("");
  function onChange(e) {
    setSearch(e.target.value);
  }
  if (itens !== null) {
    var itemSearch = itens.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  return (
    <>
      <SearchBar onChange={onChange} value={search} />

      {isEmpty ? (
        <EmptyList
          description="Ops! A sua despensa está vazia."
          subTitle="Que tal adicionar itens agora?"
        />
      ) : (
        <main className="container-itens">
          {itemSearch.map((item, index) => {
            function handleClick() {
              history.push("/inserir-item", {
                item,
              });
            }
            function Img() {
              if (item.category === "Mercearia") {
                return imgMercearia;
              }
              if (item.category === "Limpeza") {
                return imgLimpeza;
              }
              if (item.category === "Perfumaria") {
                return imgPerfumaria;
              }
            }

            return (
              <Item
                onClick={handleClick}
                key={index}
                src={Img()}
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
