import React from "react";

import { Header } from "../../components/header/header";
import { Navbar } from "../../components/navbar/navbar";
import { DropDownAb } from "../../components/inputs-form/dropdown/drop-down";
import { ProductName } from "../../components/inputs-form/product-name/product-name";
import { Quant } from "../../components/inputs-form/input-quant/input-quant";
import { Calendar } from "../../components/inputs-form/calendar/calendar";
import { Checkbox } from "../../components/inputs-form/checkbox/checkbox";
import { Button } from "../../components/Button/Button";
import "./form.scss";
const medidas = ["pct", "kg", "g", "cx"];
const categorias = ["Limpeza", "Mercearia", "Perfumaria", "Perfumaria"];
export function FormItens() {
  return (
    <>
      <Header text="Inserir item na despensa" />

      <form className="container-form">
        <ProductName />
        <Checkbox />
        <div className="quant-drop">
          <Quant />
          <DropDownAb
            className="w190"
            arrowWidth="arrow190"
            title="Unidade de medida:"
            placeholder="Unidades"
            options={medidas}
          />
        </div>

        <Calendar />
        <div className="container-category"></div>
        <DropDownAb
          className="w328"
          arrowWidth="arrow328"
          title="Categoria:"
          placeholder="Escolha uma categoria"
          options={categorias}
        />
        <div className="container-button">
          <Button
            value="Cancelar"
            style={{
              background: "#B24947",
              width: "150px",
              margin: "0 16px 0 0",
            }}
          />
          <Button
            value="Salvar"
            style={{ background: "#437056", width: "150px" }}
          />
        </div>
      </form>

      <Navbar />
    </>
  );
}
