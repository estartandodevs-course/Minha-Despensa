import React, { useState } from "react";
import "./form.scss";
import { FormItens } from "../../components/inputs-form/components/form/form-item";
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
    <ModalDelete
          isOpen={modalIsOpen}
          onCancel={() => setModalOpen(false)}
          onDelete={() => Delete()}
        />
      <Header
        openDeleteModal={() => setModalOpen(true)}
        currentItem={currentItem}
      />
      <main className="container-form-page">
       
        <FormItens currentItem={currentItem} />
      </main>
      <Navbar />
    </>
  );
}
