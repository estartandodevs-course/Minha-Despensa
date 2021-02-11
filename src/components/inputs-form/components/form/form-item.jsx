import React, { useState } from "react";


export function FormItens(props) {
  const initialFieldValues = {
    fullName: "",
    mobile: "",
    email: "",
    address: "",
  };
  var [values, setValues] = React.useState(initialFieldValues);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.currentItem(values)
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="fULL name"
          name="fullName"
          value={values.fullName}
          onChange={handleInputChange}
        />
        <input
          placeholder="Mobile"
          name="mobile"
          value={values.mobile}
          onChange={handleInputChange}
        />
        <input
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="fULL address"
          name="address"
          value={values.address}
          onChange={handleInputChange}
        />
        <input type="submit" value="Save" />
      </form>
    </>
  );
}
