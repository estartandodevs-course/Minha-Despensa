import React, { useState } from "react";
import "./form.scss";
import { FormItens } from "../../components/inputs-form/components/form/form-item";
import { ModalDelete } from "../../components/modal/modal";
import { Navbar } from "../../components/navbar/navbar";
import { Header } from "../../components/header/header";
// import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
// import { useHistory } from "react-router-dom";
import firebaseDb from '../../auth/config'
import { useCount } from '../../context/count'


export function FormPage() {
  const { currentId, setCurrentId } = useCount()
  const { productsObjects } = useCount()
  const [modalIsOpen, setModalOpen] = useState(false);
  const currentItem = obj => {
    if (currentId === "")
      firebaseDb.child('products/').push(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("")
      });
    else
      firebaseDb.child(`products/${currentId}`).set(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("")
      });
  }


  return (
    <>
      <ModalDelete
        isOpen={modalIsOpen}
        onCancel={() => setModalOpen(false)}
      // onDelete={() => Delete()}
      />
      <Header
        openDeleteModal={() => setModalOpen(true)}
        currentItem={currentItem}
      />
      <main className="container-form-page">
        <FormItens {...{ currentItem, productsObjects, currentId }} />
      </main>
      <Navbar />
    </>
  );
}
