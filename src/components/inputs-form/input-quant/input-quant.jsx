import { Icon } from "../../navbar/icon-navbar/icon-navbar";
import "./input-quant.scss";
import iconMais from "../../../assets/icons/icon-mais.svg";
import iconMaisVerde from "../../../assets/icons/icon-mais-verde.svg";
import iconMenos from "../../../assets/icons/icon-menos.svg";
import iconMenosVerde from "../../../assets/icons/icon-menos-verde.svg";
import { useState } from "react";

export function Quant(props) {
  const { onChange, name, value = 0 } = props;
  const [mais, setMais] = useState(iconMais);
  const [menos, setMenos] = useState(iconMenos);
  const [num, setNum] = useState({ color: "#c48b76" });
  const [title, setTitle] = useState({ color: "#c48b76" });

  function onFocus() {
    setMais(iconMaisVerde);
    setMenos(iconMenosVerde);
    setNum({ color: "#437056" });
    setTitle({ color: "#437056" });
  }

  function onFocusOut() {
    setMais(iconMais);
    setMenos(iconMenos);
    setNum({ color: "#c48b76" });
    setTitle({ color: "#c48b76" });
  }

  function onPlus() {
    onChange({ target: { name: name, value: parseInt(value) + 1 } });
  }
  function onLess() {
    if (value >= 1) {
      onChange({ target: { name: name, value: parseInt(value) - 1 } });
    }
  }

  return (
    <>
      <div>
        <h2 style={title} className="quant-title">
          Qtde
        </h2>
        <div className="quant-section">
          <Icon className={"icon-menos"} src={menos} onClick={onLess} />
          <input
            name={name}
            style={num}
            onFocus={onFocus}
            onBlur={onFocusOut}
            onChange={(e) => onChange(e)}
            className="input-quant"
            type="number"
            value={value}
            disabled
          />
          <Icon className={"icon-mais"} src={mais} onClick={onPlus} />
        </div>
      </div>
    </>
  );
}
