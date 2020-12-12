import React from "react";
import "./form.scss";
import { FormItens } from "../../components/inputs-form/form/form-item";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export function FormPage() {
  const location = useLocation();
  const item = location.state;
  if (item !== undefined) {
    console.log(item);
  }

  return (
    <main className="container-form-page">
      <FormItens />
    </main>
  );
}
