import React from "react";
import imgArrow from "../../assets/icons/arrow.svg";

import "./card.scss";

export function Card(props) {
  const { title, text, quantity, color } = props;
  console.log(title)

  return (
    <div className={`${'container-card'} ${title === 'Despensa' ? 'vegetable-img' : 'cart-img'}`} style={{ backgroundColor: color }}>
      <h1>{title}</h1>
      <p className="text">{text}</p>
      <p className="qnt">{quantity}</p>
      <div className="container-arrow">
        <img className="arrow-card" src={imgArrow} alt="seta" />
      </div>
    </div>
  );
}
