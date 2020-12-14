import React, {useState, useEffect} from "react";
import { EmptyList } from "../../components/empty-list/empty-list";
import { SearchBar } from "../../components/search-bar/search-bar";
import "./despensa.scss";
// import { itens } from "../../_mocks/mocks.jsx";
import { Item } from "../../components/item/item";
import { useHistory} from "react-router-dom";

export function MinhaDespensa() {
  const history = useHistory();
  const itens = JSON.parse(localStorage.getItem("Item"));
  const isEmpty = itens === null;
  const [search, setSearch] = useState("")

  function onChange(e) {
    setSearch(e.target.value)
    console.log(search)
  }

  // useEffect(()=>{
  //   setFiltrarItem(
  //     itens.filter((item)=>{
  //       return item.name.toLowerCase().includes(search.toLowerCase())
  //     })
  //   )
  // },[search,itens])

  const itemSearch = itens.filter((item)=>{
    return item.name.toLowerCase().includes(search.toLowerCase())
      })
  return (
    <>
      <SearchBar onChange={onChange} />

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
                key: index,
                name: item.name,
                alt: item.alt,
                qnt: item.qnt,
                stateItem: item.stateItem,
                date: item.date,
                category: item.category,
                unit: item.unit,
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
