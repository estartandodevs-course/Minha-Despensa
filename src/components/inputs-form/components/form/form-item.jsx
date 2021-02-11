import React, { useState } from "react";
import { Input } from "../input/input";
// import { Checkbox } from "../../components/checkbox/checkbox";
import { Quantity } from "../../components/input-quant/input-quant";
// import { Calendar } from "../../components/calendar/calendar";
// import { DropDownAb } from "../../components/dropdown/drop-down";
import { Button } from "../../../../components/Button/Button";
// import { Success } from "../../components/success/success";
// import { AddPhoto } from "../addPhoto/addPhoto"
import "../../../../pages/Form/form.scss";
import { Link, useHistory } from "react-router-dom";
// import { database } from '../../../../auth/config'
// const options = [
//   { value: "pct" },
//   { value: "kg" },
//   { value: "g" },
//   { value: "cx" },
// ];
// const categorias = [
//   { value: "Limpeza" },
//   { value: "Mercearia" },
//   { value: "Perfumaria" },
// ];

export function FormItens(props) {
  const initialFieldValues = {
    name: "",
    quantity: "",
  }

  const [form, setForm] = useState(initialFieldValues);
  // console.log(form)

  const handleChange = (e) => {
    var { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // function handleChange(e) {
  //   var { name, value } = e.target;
  //     setForm({
  //       ...form,
  //       [name]: value,
  //     });
  //   }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.currentItem(form)
  };
console.log(form)

  // const { currentItem } = props;
  // const history = useHistory();
  // const isEdit = currentItem || false;
  // const id = isEdit ? currentItem.id : Math.floor(Math.random() * 1000);
  // const initialForm = isEdit ? currentItem : { id: id, name: "", qnt: 0 };
  const [modal, setModal] = useState({ display: "none" });

  // const handleInputChange = (e) => {
  //   var { name, value } = e.target;
  //   setValues({
  //     ...values,
  //     [name]: value,
  //   });
  // };




  return (
    <>
    <form onSubmit={handleFormSubmit}>
      <Input
        placeholder="fULL name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <Input
        placeholder="Mobile"
        name="quantity"
        value={form.quantity}
        onChange={handleChange}
      />

      <input type="submit" value="Save" />

      </form>





      {/* <form className="container-form" onSubmit={handleFormSubmit}>
        <Input
          title="Nome"
          name="name"
          label="nome"
          value={form.name}
          onChange={handleChange}
        />
        <div className="quant-drop">
          <Quantity
            name="quantity"
            value={form.quantity}
            onChange={handleChange}

          />
        </div>
      <input type="submit" value="Save" />

        <div className="container-button">
          <Link to="/despensa"> */}
      {/* <Button
              value="Cancelar"
              style={{
                background: "#B24947",
                margin: "0 16px 0 0",
              }}
            /> */}
      {/* </Link> */}
      {/* <Button
            type="submit"
            value="Salvar"
            style={{ background: "#437056" }}
          // onClick={isEdit ? editItem : addItem}
          /> */}
      {/* </div> */}
      {/* </form> */}
    </>
  );
}
