import React, { useState, useEffect } from "react";
import { EmptyList } from "../../components/empty-list/empty-list";
import { SearchBar } from "../../components/search-bar/search-bar";
import "./pantry.scss";
import { Item } from "../../components/item/item";
import firebaseDb from "../../auth/config"

import imgMercearia from "../../assets/icons/form-icons/category/refinado.svg";
import imgLimpeza from "../../assets/icons/form-icons/category/limpeza.svg";
import imgPerfumaria from "../../assets/icons/form-icons/category/perfumaria.svg";
import { useHistory } from "react-router-dom";

import { useCount } from '../../context/count'

export function MinhaDespensa() {
  const {contactObjects, setContacObjects} = useCount()


  // const [contactObjects, setContacObjects] = useState(false);
  var [currentId, setCurrentId] = useState();
  const history  = useHistory()


useEffect(() => {
  firebaseDb.child("produtos").on("value", (snapshot) => {
    if (snapshot.val() != null)
      setContacObjects({
        ...snapshot.val(),
      });
  });
}, []);
 

  return (
    <>
      <SearchBar />
      {contactObjects === false ? (
        <EmptyList
          description="Ops! A sua despensa está vazia."
          subTitle="Que tal adicionar itens agora?"
        />
      ) : (
          <main className="container-itens">
            {
              Object.keys(contactObjects).map((id) => {
                function handleClick() {
                  history.push("/inserir-item", {
                    contactObjects,
                  });
                }
                function Img() {
                  if (contactObjects[id].category === "Mercearia") {
                    return imgMercearia;
                  }
                  if (contactObjects[id].category === "Limpeza") {
                    return imgLimpeza;
                  }
                  if (contactObjects[id].category === "Perfumaria") {
                    return imgPerfumaria;
                  }
                }
                return (
                  <Item
                    // onClick={() => {setCurrentId(id)}}
                    key={id}
                    name={contactObjects[id].name}
                    quantity={contactObjects[id].quantity}
                    status={contactObjects[id].status}
                    expirationDate={contactObjects[id].expirationDate}
                    imageSrc={Img()}
                  />
                );
              })
            }
          </main>
        )}
    </>
  )
}
