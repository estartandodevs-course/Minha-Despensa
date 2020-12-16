import { Icon } from "../navbar/icon-navbar/icon-navbar";
import calendarIcon from "../../assets/icons/calendar-icon.svg";
import calendarRed from "../../assets/icons/calendar-red.svg";
import calendarOrange from "../../assets/icons/calendar-orange.svg";

import greenFlag from "../../assets/icons/green-flag.svg";
import redFlag from "../../assets/icons/red-flag.svg";
import greenMarket from "../../assets/icons/green-market.svg";
import redMarket from "../../assets/icons/red-market.svg";
import "./item.scss";
import { useState, useEffect } from "react";
import moment from "moment";

export function Item(props) {
  const { src, alt, name, qnt, stateItem, date, onClick } = props;
  const [market, setMarket] = useState(redMarket);
  const [flag, setFlag] = useState(greenFlag);
  const [calendar, setCalendar] = useState(calendarIcon);
  const [shelfLife, setShelfLife] = useState("");

  function flagColor() {
    if (qnt === 0) {
      setFlag(redFlag);
    } else {
      setFlag(greenFlag);
    }
  }

  useEffect(flagColor);
  useEffect(catchDate);

  function qntItem() {
    if (qnt === 0) {
      return { backgroundColor: "#A72422" };
    } else if (qnt === 1) {
      return { backgroundColor: "#ED6807" };
    } else {
      return { backgroundColor: "#437056" };
    }
  }

  function catchDate() {
    //DATA ATUAL
    let currentDateJS = new Date();
    const dayJS = currentDateJS.getDate();
    const monthJS = currentDateJS.getMonth() + 1;
    const yearJS = currentDateJS.getFullYear();
    const actualDate = `${monthJS}-${dayJS}-${yearJS}`;
    //DATA ATUAL

    //DATA DO ITEM
    const dateArray = date.match(/\d/g);
    const itemDay = dateArray[6] + dateArray[7];
    const itemMonth = dateArray[4] + dateArray[5];
    const itemYear = dateArray[0] + dateArray[1] + dateArray[2] + dateArray[3];
    const itemDate = ` ${itemMonth}-${itemDay}-${itemYear}`;
    //DATA DO ITEM

    //ESTÁ FRESCO ?
    const isFresh = moment(itemDate).isAfter(actualDate);

    console.log(moment(date).isAfter(currentDateJS));

    //Caso Fresco
    if (isFresh) {
      let diffFresh = moment(itemDate).diff(actualDate, "d");

      if (diffFresh > 7) {
        diffFresh = moment(itemDate).diff(actualDate, "week");
        if (diffFresh === 1) {
          setShelfLife(`Em ${diffFresh} semana`);
          return;
        }
        setShelfLife(`Em ${diffFresh} semanas`);
        setCalendar(calendarIcon);
        return;
      }

      if (diffFresh === 1) {
        setShelfLife(`Em ${diffFresh} dia`);
        return;
      }

      setShelfLife(`Em ${diffFresh} dias`);
      setCalendar(calendarOrange);
      return;
    }
    // Caso Vencido
    else {
      let diffUnFresh = moment(actualDate).diff(itemDate, "d");
      setCalendar(calendarRed);

      if (diffUnFresh > 7) {
        diffUnFresh = moment(actualDate).diff(itemDate, "w");
        setShelfLife(`Há ${diffUnFresh} semanas`);
        return;
      }

      if (diffUnFresh === 1) {
        diffUnFresh = moment(actualDate).diff(itemDate, "d");
        setShelfLife(`Há ${diffUnFresh} dia`);
        return;
      }

      setShelfLife(`Há ${diffUnFresh} dias`);
      return;
    }
  }

  // function onClick(){

  //     if (market === redMarket){
  //         setMarket(greenMarket)
  //         }
  //     if (market === greenMarket){
  //         setMarket(redMarket)
  //     }
  // }
  //catchDate();

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
          <Icon className="icon" src={calendar} />
          <p className="text-item">{shelfLife}</p>
        </div>
      </div>
    </div>
  );
}
