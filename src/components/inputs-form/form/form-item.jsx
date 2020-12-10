import React, { useState } from "react";

import { Calendar } from "../calendar/calendar";
import { Checkbox } from "../checkbox/checkbox";
import { ProductName } from "../product-name/product-name";
import { DropDownAb } from "../dropdown/drop-down";
import { Quant } from "../input-quant/input-quant";
import { Button } from "../../Button/Button";
import "../../../pages/Form/form.scss";
import { itens } from "../../../_mocks/mocks";

const options = [
  { value: "pct" },
  { value: "kg" },
  { value: "g" },
  { value: "cx" },
];
const categorias = [
  { value: "Limpeza" },
  { value: "Mercearia" },
  { value: "Perfumaria" },
];

export function FormItens(props) {
  const [form, setForm] = useState({});

  function handleChange(name, value) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  function addItem() {
    itens.push(form);
    console.log(form);
    console.log(itens);
  }

  return (
    <div className="container-form">
      <ProductName
        name="name"
        label="nome"
        onChange={({ target }) => handleChange(target.name, target.value)}
      />
      <Checkbox
        onChange={({ target }) => handleChange(target.name, target.value)}
      />
      <div className="quant-drop">
        <Quant
          onChange={({ target }) => handleChange(target.name, target.value)}
          name="qnt"
        />
        <DropDownAb
          onChange={({ value }) => handleChange("unit", value)}
          className="w190"
          arrowWidth="arrow190"
          title="Unidades de medida:"
          placeholder="Unidades"
          options={options}
        />
      </div>

      <Calendar
        name="date"
        onChange={({ target }) => handleChange(target.name, target.value)}
      />
      <div className="container-category"></div>
      <DropDownAb
        onChange={({ value }) => handleChange("category", value)}
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
          onClick={addItem}
        />
      </div>
    </div>
  );
}
