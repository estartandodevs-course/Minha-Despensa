import React, { useState } from "react";
import "./form.scss";
import { FormItens } from "../../components/inputs-form/form/form-item";
import { ModalDelete } from "../../components/modal/modal";
import { Navbar } from "../../components/navbar/navbar";
import { Header } from "../../components/header/header";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export function FormPage() {
  const [modalIsOpen, setModalOpen] = useState(false);
  const location = useLocation();

  function Delete() {
    if (location.state !== null) {
      const index = location.state.key;
      const jsonItem = JSON.parse(localStorage.getItem("Item"));
      jsonItem.splice(index, 1);
      localStorage.setItem("Item", JSON.stringify(jsonItem));
    }

    setModalOpen(false);
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
        <FormItens />
      </main>
      <Navbar />
    </>
  );
}
