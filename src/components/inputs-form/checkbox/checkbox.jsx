import React from "react";
import "./checkbox.scss";
export function Checkbox(props) {
  const { onChange } = props;
  return (
    <>
      <div className="container-check">
        <h2 className="checkbox-title">Status:</h2>
        <div className="radio">
          <input
            onChange={(e) => onChange(e)}
            id="fechado"
            className="input-fechado"
            type="radio"
            name="state"
            value="Fechado"
          />
          <label htmlFor="fechado" className="label-fechado">
            Fechado
          </label>
        </div>
        <div className="radio">
          <input
            onChange={(e) => onChange(e)}
            id="aberto"
            className="input-aberto"
            type="radio"
            name="state"
            value="Aberto"
          />
          <label htmlFor="aberto" className="label-aberto">
            Em uso
          </label>
        </div>
        <div className="radio">
          <input
            onChange={(e) => onChange(e)}
            id="acabou"
            className="input-acabou"
            type="radio"
            name="state"
            value="acabou"
            disabled
          />
          <label htmlFor="acabou" className="label-acabou">
            Acabou
          </label>
        </div>
      </div>
    </>
  );
}
