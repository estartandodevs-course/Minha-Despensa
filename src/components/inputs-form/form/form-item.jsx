import React, { useState } from "react";
//

//
import { Calendar } from "../calendar/calendar";
//import { Checkbox } from "../checkbox/checkbox";
import { ProductName } from "../product-name/product-name";
import { DropDownAb } from "../dropdown/drop-down";
//import { Quant } from "../input-quant/input-quant";
import { Button } from "../../Button/Button";
//import { itens } from "../../../_mocks/mocks";

const options = [
  { value: "pct" },
  { value: "kg" },
  { value: "g" },
  { value: "cx" },
];
//const categorias = ["Limpeza", "Mercearia", "Perfumaria"];

export function FormItens(props) {
  const [form, setForm] = useState({});
  const [unita, setUnita] = useState({});

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    const formulario = { ...form, unit: unita };

    setForm({
      ...formulario,
      [name]: value,
    });
  }
  function handleChangeDropbox(e) {
    const value = e.value;

    setUnita(value);
  }

  return (
    <div>
      <ProductName name="name" label="nome" onChange={handleChange} />

      {/* <div style={{ display: "flex" }}> */}
      <DropDownAb
        name="category"
        onChange={handleChangeDropbox}
        className="w328"
        arrowWidth="arrow328"
        title="Categoria:"
        placeholder="Escolha uma categoria"
        options={options}
      />
      {/* <Quant /> */}

      <DropDownAb
        name="category"
        onChange={handleChangeDropbox}
        className="w328"
        arrowWidth="arrow328"
        title="Categoria:"
        placeholder="Escolha uma categoria"
        options={options}
      />
      {/* </div> */}

      <Calendar name="date" onChange={handleChange} />

      {/* <Checkbox name="stateItem" onChange={handleChange} /> */}

      <Button onClick={() => console.log(form)} value="Salvar" />
    </div>
  );
}
