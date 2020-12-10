import React, { useState } from "react";

import { Calendar } from "../calendar/calendar";
import { Checkbox } from "../checkbox/checkbox";
import { ProductName } from "../product-name/product-name";
import { DropDownAb } from "../dropdown/drop-down";
import { Quant } from "../input-quant/input-quant";
import { Button } from "../../Button/Button";
import "../../../pages/Form/form.scss";
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
    <div className="container-form">
      <ProductName name="name" label="nome" onChange={handleChange} />
      <Checkbox onChange={handleChange} />
      <div className="quant-drop">
        <Quant onChange={handleChange} name="qnt" />
        <DropDownAb
          name="category"
          onChange={handleChangeDropbox}
          className="w190"
          arrowWidth="arrow190"
          title="Unidades de medida:"
          placeholder="Unidades"
          options={options}
        />
      </div>

      <Calendar name="date" onChange={handleChange} />
      <div className="container-category"></div>
      <DropDownAb
        name="category"
        onChange={handleChangeDropbox2}
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
          onClick={() => console.log(form)}
        />
      </div>
    </div>
  );
}
