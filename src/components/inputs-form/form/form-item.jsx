import React, { useState } from "react";

import { ProductName } from "../product-name/product-name";
import { Checkbox } from "../checkbox/checkbox";
import { Quant } from "../input-quant/input-quant";
import { Calendar } from "../calendar/calendar";
import { DropDownAb } from "../dropdown/drop-down";
import { Button } from "../../Button/Button";
import { Link } from "react-router-dom";
import { Success } from "../success/success";
import { itens } from "../../../_mocks/mocks";
import "../../../pages/Form/form.scss";

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
  const [modal, setModal] = useState({ display: "none" });

  function handleChange(name, value) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  function addItem() {
    itens.push(form);

    if (localStorage.getItem("Item") === null) {
      localStorage.setItem("Item", JSON.stringify([form]));
    } else {
      const jsonItem = JSON.parse(localStorage.getItem("Item"));
      localStorage.setItem("Item", JSON.stringify([...jsonItem, form]));
    }
    Alert();
    setForm({});
  }

  function Alert() {
    setModal({ display: "flex" });
    setTimeout(() => {
      setModal({ display: "none" });
    }, 4000);
    //return modal;
  }

  return (
    <div className="container-form">
      <Success style={modal} text="Item adicionado com sucesso!" />

      <ProductName
        title="Nome:"
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
  
      <DropDownAb
        onChange={({ value }) => handleChange("category", value)}
        className="w328"
        arrowWidth="arrow328"
        title="Categoria:"
        placeholder="Escolha uma categoria"
        options={categorias}
      />
      <div className="container-button">
        <Link to="/despensa">
          <Button
            value="Cancelar"
            style={{
              background: "#B24947",
              width: "150px",
              margin: "0 16px 0 0",
            }}
          />
        </Link>
        {/* <Link to="/despensa"> */}
        <Button
          type="submit"
          value="Salvar"
          style={{ background: "#437056", width: "150px" }}
          onClick={addItem}
        />
        {/* </Link> */}
      </div>
    </div>
  );
}
