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

  let validade = "a";
  function catchDate() {
    //let validDate = date
    let currentDateJS = new Date();
    const dayJS = currentDateJS.getDate();
    const monthJS = currentDateJS.getMonth() + 1;
    const yearJS = currentDateJS.getFullYear();
    const actualDate = `${monthJS}-${dayJS}-${yearJS}`;

    //const DataAtual = moment(actualDate);

    const dateArray = date.match(/\d/g);
    const itemDay = dateArray[6] + dateArray[7];
    const itemMonth = dateArray[4] + dateArray[5];
    const itemYear = dateArray[0] + dateArray[1] + dateArray[2] + dateArray[3];
    const itemDate = ` ${itemMonth}-${itemDay}-${itemYear}`;

    const isFresh = moment(itemDate).isAfter(actualDate);
    //const itemFresh = moment(itemDate).diff(actualDate, "d")
    //const itemUnfresh = moment(actualDAte).diff(itemlDate, "d")
    console.log(moment(itemDate).isAfter(actualDate));

    if (isFresh) {
      let itemFresh = moment(itemDate).diff(actualDate, "d");
      if (itemFresh > 7) {
        itemFresh = moment(itemDate).diff(actualDate, "week");
        validade = `Em ${itemFresh} semanas`;
        //console.log(validade);
        setCalendar(calendarIcon);
        return `Em ${itemFresh} semanas`;
      }
      if (itemFresh === 1) {
        validade = `Em ${itemFresh} dia`;
        //console.log(validade);
        return validade;
      }
      validade = `Em ${itemFresh} dias`;
      //console.log(validade);
      setCalendar(calendarOrange);
      return validade;
    } else {
      let itemUnfresh = moment(actualDate).diff(itemDate, "d");
      setCalendar(calendarRed);
      if (itemUnfresh > 7) {
        itemUnfresh = moment(actualDate).diff(itemDate, "w");
        validade = `Há ${itemUnfresh} semanas`;
        //console.log(validade);
        return validade;
      }

      if (itemUnfresh === 1) {
        itemUnfresh = moment(actualDate).diff(itemDate, "d");
        validade = `Há ${itemUnfresh} dia`;
        //console.log(validade);
        return validade;
      }

      validade = `Há ${itemUnfresh} dias`;
      //console.log(validade);
      return validade;
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
          <p className="text-item">{validade}</p>
          <Icon
            src={market}
            onClick={() =>
              market === redMarket
                ? setMarket(greenMarket)
                : setMarket(redMarket)
            }
          />
          <button onClick={catchDate}></button>
        </div>
      </div>
    </div>
  );
}
