import React from "react";
import DropDown from "react-dropdown";
import "./drop-down.scss";
import arrow from "../../../assets/icons/arrow-down.svg";

export function DropDownAb(props) {
  const {
    options,
    title,
    placeholder,
    className,
    arrowWidth,
    onChange,
    value,
    name,
  } = props;

  return (
    <>
      <div className="container-select">
        <h2>{title}</h2>
        <img className={arrowWidth} src={arrow} alt="arrow to down" />
        <DropDown
          className={className}
          placeholderClassName="place"
          menuClassName="menu"
          controlClassName="control"
          options={options}
          value={value}
          name={name}
          onChange={(e) => onChange(e)}
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
