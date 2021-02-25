import { Icon } from "../navbar/icon-navbar/icon-navbar";
import calendarIcon from "../../assets/icons/calendar-icon.svg";
import calendarRed from "../../assets/icons/calendar-red.svg";
import calendarOrange from "../../assets/icons/calendar-orange.svg";
import brownFlag from "../../assets/icons/brown-flag.svg";
import greenFlag from "../../assets/icons/green-flag.svg";
import redFlag from "../../assets/icons/red-flag.svg";
import "./item.scss";
import { useState, useEffect } from "react";
import moment from "moment";


export function Item(props) {
  const { imageSrc, alt, name, quantity, status, expirationDate, onClick } = props;
  const [flag, setFlag] = useState(greenFlag);

  const [calendar, setCalendar] = useState(calendarIcon);
  const [shelfLife, setShelfLife] = useState("");


  function flagColor() {
    if (status === "Acabou") {
      setFlag(redFlag);
    }
    if (status === "Fechado") {
      setFlag(brownFlag);
    }
    if (status === "Aberto") {
      setFlag(greenFlag);
    }
  }

  useEffect(flagColor);
  useEffect(catchDate);

  function qntItem() {
    if (quantity === 0) {
      return { backgroundColor: "#A72422" };
    } else if (quantity === 1) {
      return { backgroundColor: "#ED6807" };
    } else {
      return { backgroundColor: "#437056" };
    }
  }

  function catchDate() {
    //DATA ATUAL
    let currentDateJS = new Date();

    //ESTÁ FRESCO ?
    const isFresh = moment(expirationDate).isAfter(currentDateJS);

    const diffFreshDays = moment(expirationDate).diff(currentDateJS, "d");
    const diffFreshWeeks = moment(expirationDate).diff(currentDateJS, "w");

    const diffUnFreshDays = moment(currentDateJS).diff(expirationDate, "d");
    const diffUnFreshWeeks = moment(currentDateJS).diff(expirationDate, "w");

    //Caso Fresco
    if (isFresh) {
      if (diffFreshDays > 7) {
        if (diffFreshWeeks === 1) {
          setShelfLife(`Em ${diffFreshWeeks} semana`);
          return;
        }
        setShelfLife(`Em ${diffFreshWeeks} semanas`);
        setCalendar(calendarIcon);
        return;
      }

      if (diffFreshDays === 1) {
        setShelfLife(`Em ${diffFreshDays} dia`);
        setCalendar(calendarOrange);
        return;
      }
      if (diffFreshDays === 0) {
        setShelfLife(`Vence hoje`);
        setCalendar(calendarOrange);
        return;
      }

      setShelfLife(`Em ${diffFreshDays} dias`);
      setCalendar(calendarOrange);
      return;
    }
    // Caso Vencido
    else {
      setCalendar(calendarRed);

      if (diffUnFreshDays > 7) {
        setShelfLife(`Há ${diffUnFreshWeeks} semanas`);
        return;
      }
      if (diffUnFreshDays === 1) {
        setShelfLife(`Há ${diffUnFreshDays} dia`);
        return;
      }
      setShelfLife(`Há ${diffUnFreshDays} dias`);
      return;
    }
  }


  return (
    <div onClick={onClick} className="card-item-container">
      <div className="image-container">
        <img className="item-image" src={imageSrc} alt={alt} />
        <div style={qntItem()} className="qnt-box">
          <p>{quantity}</p>
        </div>
      </div>
      <div className="item-section">
        <h1 className="item-name">{name}</h1>
        <div className="flag-text">
          <Icon className="icon" src={flag} />
          <p className="text-item">{status}</p>
        </div>
        <div className="flag-text">
          <Icon className="icon" src={calendar} />
          <p className="text-item">{shelfLife}</p>
        </div>
      </div>
    </div>
  );
}
