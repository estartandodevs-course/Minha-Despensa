import React, { useState } from "react";

import { ProductName } from "../../components/product-name/product-name";
import { Checkbox } from "../../components/checkbox/checkbox";
import { Quant } from "../../components/input-quant/input-quant";
import { Calendar } from "../../components/calendar/calendar";
import { DropDownAb } from "../../components/dropdown/drop-down";
import { Button } from "../../../../components/Button/Button";
import { Success } from "../../components/success/success";
import "../../../../pages/Form/form.scss";
import { Link, useHistory } from "react-router-dom";

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
  const { currentItem } = props;
  const history = useHistory();
  const isEdit = currentItem || false;
  const id = isEdit ? currentItem.id : Math.floor(Math.random() * 1000);
  const initialForm = isEdit ? currentItem : { id: id, name: "", qnt: 0 };

  const [form, setForm] = useState(initialForm);
  const [modal, setModal] = useState({ display: "none" });

  function handleChange(name, value) {
    if (value !== undefined) {
      setForm({
        ...form,
        [name]: value,
      });
    }
  }

  function addItem(e) {
    e.preventDefault();
    if (localStorage.getItem("Item") === null) {
      localStorage.setItem("Item", JSON.stringify([form]));
    } else {
      const jsonItem = JSON.parse(localStorage.getItem("Item"));
      localStorage.setItem("Item", JSON.stringify([...jsonItem, form]));
    }
    Alert();
    setForm({ id: id, name: "" });
  }

  function editItem() {
    let jsonItem = JSON.parse(localStorage.getItem("Item"));
    const index = jsonItem.findIndex((item) => item.id === form.id);
    jsonItem[index] = form;
    localStorage.setItem("Item", JSON.stringify(jsonItem));
    history.push("/despensa");
  }

  function Alert() {
    setModal({ display: "flex" });
    setTimeout(() => {
      setModal({ display: "none" });
    }, 4000);
  }

  return (
    <form className="container-form">
      <Success style={modal} text="Item adicionado com sucesso!" />

      <ProductName
        title="Nome:"
        name="name"
        label="nome"
        onChange={({ target }) => handleChange(target.name, target.value)}
        value={form.name}
      />
      <Checkbox
        onChange={({ target }) => handleChange(target.name, target.value)}
        currentItem={currentItem}
      />
      <div className="quant-drop">
        <Quant
          onChange={({ target }) => handleChange(target.name, target.value)}
          name="qnt"
          value={form.qnt}
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
          onClick={isEdit ? editItem : addItem}
        />
        {/* </Link> */}
      </div>
    </form>
  );
}
