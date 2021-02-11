import React from "react";
import "./calendar.scss";

export function Calendar(props) {
  const { onChange, name, value } = props;

  return (
    <div className="container-calendar">
      <label className="calendar-title">Data de validade</label>
      <input
        className="calendar-input"
        name={name}
        placeholder="dd/mm/aaaa"
        onChange={onChange}
        value={value}
        type="date"
      />
    </div>
  );
}
