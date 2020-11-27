import { Icon } from "./icon-navbar/icon-navbar"
import "./navbar.scss"
import HomeIcon from "../../assets/icons/home-icon.svg"
import AddIcon from "../../assets/icons/add-icon.svg"
import NotificationIcon from "../../assets/icons/notification-icon.svg"
import ProfileIcon from "../../assets/icons/profile-icon.svg"


export function Navbar(props){
    const {} = props
    return(
        <div className="nav">
            <Icon src={HomeIcon}/>
            <Icon src={AddIcon}/>
            <Icon src={NotificationIcon} />
            <Icon src={ProfileIcon}/>
        </div>
    )

}