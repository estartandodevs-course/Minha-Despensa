import { Icon } from "../navbar/icon-navbar/icon-navbar"
import calendarIcon from "../../assets/icons/calendar-icon.svg"
import greenFlag from "../../assets/icons/green-flag.svg"
import greenMarket from "../../assets/icons/green-market.svg"
import"./item.scss"
export function Item(props) {
    const {src, alt, name, qnt, stateItem, date} = props
    
    return(
        <div className="card-item-container">
            <div class="image-container">
                <img className="item-image" src={src} alt={alt}/>
                <div className="qnt-box">
                <p>{qnt}</p>
                </div>
            </div>
            <div className="item-section">
                <h1 className="item-name">{name}</h1>
                <div className="flag-text">
                <Icon className="icon" src={greenFlag}/>
                <p className="text-item">{stateItem}</p>
                </div>
                <div className="flag-text">
                <Icon className="icon" src={calendarIcon}/>
                <p className="text-item">{date}</p>
                <Icon src={greenMarket}/>
                </div>
            </div>
        </div>
    )
}