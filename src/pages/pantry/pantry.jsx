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
import firebaseDb from "../../auth/config"

export function MinhaDespensa() {
  var [contactObjects, setContacObjects] = React.useState({});

  React.useEffect(() => {
    firebaseDb.child("produtos").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setContacObjects({
          ...snapshot.val(),
        });
    });
  }, []);
  function Img() {
    if (contactObjects.category === "Mercearia") {
      return imgMercearia;
    }
    if (contactObjects.category === "Limpeza") {
      return imgLimpeza;
    }
    if (contactObjects.category === "Perfumaria") {
      return imgPerfumaria;
    }
  }
  return (
    <>
    <SearchBar/>
    <main className="container-itens">
      {
        Object.keys(contactObjects).map((id) => {
          return (
            <Item
            key={id}
              name={contactObjects[id].name}
              quantity={contactObjects[id].quantity}
              status={contactObjects[id].status}
              expirationDate={contactObjects[id].expirationDate}
              imageSrc={contactObjects[id].imageSrc}
            />
          ); 
        })
      }
      </main>
    </>
  )
}
