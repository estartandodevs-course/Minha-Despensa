import React, { useState } from "react";
import { Success } from "../../components/success/success";
import { Quantity } from "../input-quant/input-quant";
import { Input } from "../input/input"
import { DropDownAb } from "../../components/dropdown/drop-down";
import { Calendar } from "../../components/calendar/calendar";
import { AddPhoto } from "../addPhoto/addPhoto"
import { Checkbox } from "../../components/checkbox/checkbox";
import { Button } from "../../../../components/Button/Button";
import { Link } from "react-router-dom";

export function FormItens(props) {
  const initialFieldValues = {
    imageSrc: "",
    name: "",
    quantity: 0,
    status:"",
    expirationDate: "",
    unit:"",
    category:"",
  };
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
  
  const [modal, setModal] = useState({ display: "none" });
  const [values, setValues] = useState(initialFieldValues);

  function handleChange(name, value) {
    if (value !== undefined) {
      setValues({
        ...values,
        [name]: value,
      });
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.currentItem(values)
  };

  return (
    <>
     <Success style={modal} text="Item adicionado com sucesso!" />
      <form onSubmit={handleFormSubmit}>
        <Input
          title="Nome"
          placeholder="Informe o nome do item"
          name="name"
          value={values.name}
          onChange={({ target }) => handleChange(target.name, target.value)}
        />
        <div className="quant-drop">
          <Quantity
            name="quantity"
            value={values.quantity}
            onChange={({ target }) => handleChange(target.name, target.value)}
          />

          <DropDownAb
            name="unit"
            className="w190"
            arrowWidth="arrow190"
            title="Unidades de medida"
            placeholder="Escolha uma unidade"
            onChange={({ value }) => handleChange("unit", value)}
            options={options}
          />
        </div>

        <div className="Calendar-DropDownAb">
          <Calendar
            name="expirationDate"
            value={values.expirationDate}
            onChange={({ target }) => handleChange(target.name, target.value)}
          />
          <DropDownAb
            name="category"
            className="w328"
            arrowWidth="arrow328"
            title="Categoria"
            placeholder="Escolha uma categoria"
            options={categorias}
            onChange={({ value }) => handleChange("category", value)}
          />
        </div>

        <div className="AddPhoto-Checkbox">
          <AddPhoto 
            name="imageSrc"
            onChange={({ target }) => handleChange("imageSrc", target.files[0].name)}

          />
          <Checkbox
            name="status"
            onChange={({ target }) => handleChange(target.name, target.value)}
          />
        </div>

        <div className="container-button">
          <Link to="/despensa">
            <Button
              value="Cancelar"
              style={{
                background: "#B24947",
                margin: "0 16px 0 0",
              }}
            />
          </Link>

          <Button
            type="submit"
            value="Salvar"
            style={{ background: "#437056" }}
          // onClick={isEdit ? editItem : addItem}
          />
        </div>
      </form>
    </>
  );
}
