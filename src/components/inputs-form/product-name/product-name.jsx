import React, { useState } from "react";
import "./product-name.scss";

export function ProductName() {
  const [name, setName] = useState("");

  function onChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <div className="container-product">
        <h2 className="product-title"> Nome </h2>
        <input
          className="product-input"
          type="text"
          value={name}
          placeholder="Informe o nome do item"
          onChange={onChange}
        />
      </div>
    </>
  );
}
