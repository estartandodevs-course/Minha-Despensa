import React from "react";
import "./input.scss";

export function Input(props) {
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
      <div className="container-input">
        <label className="title">{title}</label>
        <input
          className="input"
          label={label}
          name={name}
          onChange={(e) => onChange(e)}
          type={type}
          value={value}
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
