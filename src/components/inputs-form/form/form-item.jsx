import React, { useState } from "react";

import { Calendar } from "../calendar/calendar";
import { Checkbox } from "../checkbox/checkbox";
import { ProductName } from "../product-name/product-name";
import { DropDownAb } from "../dropdown/drop-down";
import { Quant } from "../input-quant/input-quant";
import { Button } from "../../Button/Button";
//import { itens } from "../../../_mocks/mocks";

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
  const [unita, setUnita] = useState("");
  const [catego, setCatego] = useState("");

  function handleChangeDropbox(e) {
    const value = e.value;
    setUnita(value);
  }
  function handleChangeDropbox2(e) {
    const value = e.value;
    setCatego(value);
  }
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    const formulario = { ...form, unit: unita, category: catego };
    //const som = parseInt(e.target.value)

    setForm({
      ...formulario,
      [name]: value,
    });
  }

  return (
    <div>
      <ProductName name="name" label="nome" onChange={handleChange} />

      <div style={{ display: "flex" }}>
        <Quant onChange={handleChange} name="qnt" />
        <DropDownAb
          name="category"
          onChange={handleChangeDropbox}
          className="w190"
          arrowWidth="arrow190"
          title="Unidades de medida:"
          placeholder="Escolha uma unidade"
          options={options}
        />
      </div>
      <Calendar name="date" onChange={handleChange} />
      <DropDownAb
        name="category"
        onChange={handleChangeDropbox2}
        className="w328"
        arrowWidth="arrow328"
        title="Categoria:"
        placeholder="Escolha uma categoria"
        options={categorias}
      />

      <Checkbox onChange={handleChange} />

      <Button onClick={() => console.log(form)} value="Salvar" />
    </div>
  );
}
