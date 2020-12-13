import React, {useState} from "react";
import "./form.scss";
import { FormItens } from "../../components/inputs-form/form/form-item";
import { ModalDelete } from "../../components/modal/modal";
import { Navbar } from "../../components/navbar/navbar";
import {Header}  from "../../components/header/header";

export function FormPage() {
  const [modalIsOpen, setModalOpen] = useState(false) 
  return (
    <>
    <Header openDeleteModal={()=> setModalOpen(true)}/>
    <main className="container-form-page">
      <ModalDelete isOpen={modalIsOpen} onCancel={()=> setModalOpen(false)}/>
      <FormItens />
    </main>
    <Navbar/>
    </>
  );
}
