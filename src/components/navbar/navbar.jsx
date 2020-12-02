import { Icon } from "./icon-navbar/icon-navbar"
import "./navbar.scss"
import HomeIcon from "../../assets/icons/home-icon.svg"
import HomeIconOk from "../../assets/icons/home-icon-ok.svg"
import AddIcon from "../../assets/icons/add-icon.svg"
import AddIconOk from "../../assets/icons/add-icon-ok.svg"
import NotificationIcon from "../../assets/icons/notification-icon.svg"
import ProfileIcon from "../../assets/icons/profile-icon.svg"
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min"


export function Navbar(){
    
    function IsHome(){
        let data = useLocation();
        if (data.pathname === "/"){
            return HomeIconOk
        }else{
            return HomeIcon
        }
    }

    function IsAdd(){
        let data = useLocation();
        if (data.pathname === "/form"){
            return AddIconOk
        }else{
            return AddIcon
        }
    }


    return(
        <>
        <div className="nav">
            <Link to="/">
                <Icon className="icon" src={IsHome()} alt={"iconeHome"}/>    
            </Link>
            <Link to="/form">   
                <Icon className="icon" src={IsAdd()} alt={"iconeAdd"}/> 
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