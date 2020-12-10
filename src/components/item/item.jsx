import { Icon } from "../navbar/icon-navbar/icon-navbar"
import calendarIcon from "../../assets/icons/calendar-icon.svg"
import greenFlag from "../../assets/icons/green-flag.svg"
import redFlag from "../../assets/icons/red-flag.svg"
import greenMarket from "../../assets/icons/green-market.svg"
import redMarket from "../../assets/icons/red-market.svg"
import"./item.scss"
import { useState, useEffect } from "react"

export function Item(props) {
    const {src, alt, name, qnt, stateItem, date} = props
    const [market, setMarket] = useState(redMarket)
    const [flag, setFlag] = useState(greenFlag)

    function flagColor(){
        if (qnt === 0) {
            setFlag(redFlag)
        } else {
            setFlag(greenFlag)
        }
    }

    useEffect(flagColor);

    
    function qntItem(){
        if (qnt===0){
            return {backgroundColor: "#A72422"}
        }else if(qnt===1){
            return {backgroundColor:"#ED6807"}
        }else{
            return {backgroundColor: "#437056"}
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


    return(
        <div className="card-item-container">
            <div className="image-container">
                <img className="item-image" src={src} alt={alt}/>
                <div style={qntItem()} className="qnt-box">
                <p>{qnt}</p>
                </div>
            </div>
            <div className="item-section">
                <h1 className="item-name">{name}</h1>
                <div className="flag-text">
                <Icon className="icon" src={flag}/>
                <p className="text-item">{stateItem}</p>
                </div>
                <div className="flag-text">
                <Icon className="icon" src={calendarIcon}/>
                <p className="text-item">{date}</p>
                <Icon src={market} onClick={()=>(market === redMarket) ? setMarket(greenMarket) : setMarket(redMarket)}/>
                </div>
            </div>
        </div>
      
  );
}
