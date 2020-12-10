import React from "react";

import { Header } from "../../components/header/header";
import { Navbar } from "../../components/navbar/navbar";
import { FormItens } from "../../components/inputs-form/form/form-item";

export function FormPage() {
  return (
    <>
      <Header text="Inserir item na despensa" />
      <FormItens />
      <Navbar />
    </>
  );
}
