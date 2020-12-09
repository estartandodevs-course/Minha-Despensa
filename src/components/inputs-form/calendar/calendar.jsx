import React from "react";
import "./calendar.scss";

export function Calendar(props) {
  const { onChange, name, value } = props;

  return (
    <div className="container-calendar">
      <h2 className="calendar-title">Data de validade</h2>
      <input
        name={name}
        onChange={(e) => onChange(e)}
        value={value}
        className="calendar-input"
        type="date"
      />
    </div>
  );
}
