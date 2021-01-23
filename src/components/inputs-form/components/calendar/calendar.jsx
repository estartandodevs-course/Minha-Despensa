import React from "react";
import "./calendar.scss";

export function Calendar(props) {
  const { onChange, name, value } = props;

  return (
    <div className="container-calendar">
      <h2 className="calendar-title">Data de validade</h2>
      <input
        className="calendar-input"
        name={name}
        placeholder="dd/mm/aaaa"
        onChange={(e) => onChange(e)}
        value={value}
        type="date"
      />
    </div>
  );
}
