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
    style,
  } = props;

  return (
    <>
      <div className="container-product">
        <h2 className="product-title"> {label} </h2>
        <input
          className="product-input"
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          name={name}
          style={style}
        />
      </div>
    </>
  );
}
