import React from "react";
import "./Button.scss";

export function Button(props) {
  const {
    value,
    onClick,
    style = { background: "#437056", width: "250px" },
  } = props;

  return (
    <button className="button-empty" onClick={onClick} style={style}>
      {value}
    </button>
  );
}
