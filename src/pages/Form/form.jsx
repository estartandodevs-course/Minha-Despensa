import React, { useState } from "react";
import "./form.scss";
import { FormItens } from "../../components/inputs-form/form/form-item";
// import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

// export function FormPage() {
//   const location = useLocation();
//   const item = location.state;
//   if (item !== undefined) {
//     console.log(item);
//   }

import { ModalDelete } from "../../components/modal/modal";
import { Navbar } from "../../components/navbar/navbar";
import { Header } from "../../components/header/header";

export function FormPage() {
  const [modalIsOpen, setModalOpen] = useState(false);
  return (
    <>
      <Header openDeleteModal={() => setModalOpen(true)} />
      <main className="container-form-page">
        <ModalDelete
          isOpen={modalIsOpen}
          onCancel={() => setModalOpen(false)}
        />
        <FormItens />
      </main>
      <Navbar />
    </>
  );
}
