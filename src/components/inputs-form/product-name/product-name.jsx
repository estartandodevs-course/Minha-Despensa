import React from "react";
import "./product-name.scss";

export function ProductName(props) {
  const {
    label = "Nome",
    placeholder = "Informe o nome do item",
    type = "text",
    onChange,
    value,
    name,
  } = props;

  return (
    <>
      <h2 className="product-title"> Nome </h2>
      <div className="container-product">
        <input
          label={label}
          name={name}
          onChange={(e) => onChange(e)}
          className="product-input"
          type={type}
          value={value}
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
