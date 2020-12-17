import { Icon } from "../navbar/icon-navbar/icon-navbar";
import calendarIcon from "../../assets/icons/calendar-icon.svg";
import greenFlag from "../../assets/icons/green-flag.svg";
import redFlag from "../../assets/icons/red-flag.svg";
import "./item.scss";
import { useState, useEffect } from "react";

export function Item(props) {
  const { src, alt, name, qnt, stateItem, date, onClick } = props;
  const [flag, setFlag] = useState(greenFlag);

  function flagColor() {
    if (stateItem === "Acabou") {
      setFlag(redFlag);
    } else {
      setFlag(greenFlag);
    }
  }

  useEffect(flagColor);

  function qntItem() {
    if (qnt === "0") {
      return { backgroundColor: "#A72422" };
    } else if (qnt === "1") {
      return { backgroundColor: "#ED6807" };
    } else {
      return { backgroundColor: "#437056" };
    }
  }

  return (
    <div onClick={onClick} className="card-item-container">
      <div className="image-container">
        <img className="item-image" src={src} alt={alt} />
        <div style={qntItem()} className="qnt-box">
          <p>{qnt}</p>
        </div>
      </div>
      <div className="item-section">
        <h1 className="item-name">{name}</h1>
        <div className="flag-text">
          <Icon className="icon" src={flag} />
          <p className="text-item">{stateItem}</p>
        </div>
        <div className="flag-text">
          <Icon className="icon" src={calendarIcon} />
          <p className="text-item">{date}</p>
        </div>
      </div>
    </div>
  );
}
