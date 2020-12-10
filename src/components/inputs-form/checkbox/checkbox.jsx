import React from "react";
import "./checkbox.scss";

export function Checkbox(props) {
  const { onChange } = props;
  return (
    <>
      <h2 className="checkbox-title">Status:</h2>
      <div className="container-checkbox">
        <div className="radio">
          <input
            onChange={(e) => onChange(e)}
            id="fechado"
            className="input-fechado"
            type="radio"
            name="stateItem"
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
            name="stateItem"
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
            name="stateItem"
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
