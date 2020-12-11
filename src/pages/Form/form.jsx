import React from "react";
import "./form.scss";
import { FormItens } from "../../components/inputs-form/form/form-item";
import { ModalDelete } from "../../components/modal/modal";

export function FormPage() {
  return (
    <main className="container-form-page">
      <ModalDelete/>
      <FormItens />
    </main>
  );
}
