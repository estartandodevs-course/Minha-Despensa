import React, { useState } from "react";

import { Calendar } from "../calendar/calendar";
import { Checkbox } from "../checkbox/checkbox";
import { ProductName } from "../product-name/product-name";
import { DropDownAb } from "../dropdown/drop-down";
//import { Quant } from "../input-quant/input-quant";
import { Button } from "../../Button/Button";
//import { itens } from "../../../_mocks/mocks";

const medidas = [{ value: "pct", value: "g", value: "kg", value: "cx" }];
const categorias = ["Limpeza", "Mercearia", "Perfumaria"];

export function FormItens(props) {
  const [form, setForm] = useState({});

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setForm({
      ...form,
      [name]: value,
    });
  }

  return (
    <div>
      <ProductName name="name" onChange={handleChange} />

      {/* <div style={{ display: "flex" }}> */}
      {/* <Quant /> */}

      <DropDownAb
        name="unit"
        onChange={handleChange}
        className="w190"
        arrowWidth="arrow190"
        title="Unidade de medida:"
        placeholder="Unidades"
        options={medidas}
      />
      {/* </div> */}

      <Calendar name="date" onChange={handleChange} />

      <DropDownAb
        name="category"
        onChange={handleChange}
        className="w328"
        arrowWidth="arrow328"
        title="Categoria:"
        placeholder="Escolha uma categoria"
        options={categorias}
      />

      {/* <Checkbox name="stateItem" onChange={handleChange} /> */}

      <Button onClick={() => console.log(form)} value="Salvar" />
    </div>
  );
}
