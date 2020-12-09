import React, { useState } from "react";
import "./calendar.scss";

export function Calendar() {
  const [data, setData] = useState("");

  function onChange(e) {
    setData(e.target.value);
  }
  return (
    <div className="container-calendar">
      <h2 className="calendar-title">Data de validade</h2>
      <input
        className="calendar-input"
        placeholder="dd/mm/aaaa"
        type="date"
        value={data}
        onChange={onChange}
      />
    </div>
  );
}
