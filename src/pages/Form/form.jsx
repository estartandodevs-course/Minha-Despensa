import React, { useState } from "react";
import "./form.scss";
import { FormItens } from "../../components/inputs-form/form/form-item";
import { ModalDelete } from "../../components/modal/modal";
import { Navbar } from "../../components/navbar/navbar";
import { Header } from "../../components/header/header";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";

export function FormPage() {
  const [modalIsOpen, setModalOpen] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const data = location.state;
  console.log(data);
  const currentItem = data?.item || false;

  function Delete() {
    if (location.state !== null) {
      const jsonItem = JSON.parse(localStorage.getItem("Item"));
      const index = jsonItem.findIndex((item) => item.id === currentItem.id);
      jsonItem.splice(index, 1);
      localStorage.setItem("Item", JSON.stringify(jsonItem));
      if (jsonItem.length === 0) {
        localStorage.removeItem("Item");
      }
    }
    history.push("/despensa");
    // setModalOpen(false);
  }

  return (
    <>
      <Header openDeleteModal={() => setModalOpen(true)} />
      <main className="container-form-page">
        <ModalDelete
          isOpen={modalIsOpen}
          onCancel={() => setModalOpen(false)}
          onDelete={() => Delete()}
        />
        <FormItens currentItem={currentItem} />
      </main>
      <Navbar />
    </>
  );
}
