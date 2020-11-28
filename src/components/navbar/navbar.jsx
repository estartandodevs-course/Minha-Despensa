import { Icon } from "./icon-navbar/icon-navbar"
import "./navbar.scss"
import HomeIcon from "../../assets/icons/home-icon.svg"
import HomeIconOk from "../../assets/icons/home-icon-ok.svg"
import AddIcon from "../../assets/icons/add-icon.svg"
import AddIconOk from "../../assets/icons/add-icon-ok.svg"
import NotificationIcon from "../../assets/icons/notification-icon.svg"
import ProfileIcon from "../../assets/icons/profile-icon.svg"
import { Link, Route } from "react-router-dom/cjs/react-router-dom.min"


export function Navbar(props){
    const {} = props
    return(
        <>
        <div className="nav">
            <Link to="/">
                <Icon src={HomeIcon} />    
            </Link>
            <Link to="/form">   
                <Icon src={AddIcon}/> 
            </Link>
            <Link to="/despensavazia">   
                <Icon src={NotificationIcon} /> 
            </Link>
            <Link to="/">    
                <Icon src={ProfileIcon}/>
            </Link>
        </div>
        </>
    )

}