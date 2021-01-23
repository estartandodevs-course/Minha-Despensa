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
    title,
  } = props;



  return (
    <>
      <div className="container-product">
        <h2 className="product-title">{title}</h2>
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
