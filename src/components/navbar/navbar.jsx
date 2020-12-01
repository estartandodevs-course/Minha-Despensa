import { Icon } from "./icon-navbar/icon-navbar"
import "./navbar.scss"
import HomeIcon from "../../assets/icons/home-icon.svg"
import AddIcon from "../../assets/icons/add-icon.svg"
import NotificationIcon from "../../assets/icons/notification-icon.svg"
import ProfileIcon from "../../assets/icons/profile-icon.svg"
import { Link } from "react-router-dom/cjs/react-router-dom.min"


export function Navbar(){
    return(
        <>
        <div className="nav">
            <Link to="/">
                <Icon className="icon" src={HomeIcon} alt={"iconeHome"}/>    
            </Link>
            <Link to="/form">   
                <Icon className="icon" src={AddIcon} alt={"iconeAdd"}/> 
            </Link>
            <Link to="/despensavazia">   
                <Icon className="icon" src={NotificationIcon} alt={"iconeNotification"}/> 
            </Link>
            <Link to="/">    
                <Icon className="icon" src={ProfileIcon} alt={"iconeProfile"}/>
            </Link>
        </div>
        </>
    )

}