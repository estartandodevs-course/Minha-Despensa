import { Icon } from "./icon-navbar/icon-navbar";
import "./navbar.scss";
import HomeIcon from "../../assets/icons/home-icon.svg";
import HomeIconOk from "../../assets/icons/home-icon-ok.svg";
import AddIcon from "../../assets/icons/add-icon.svg";
import AddIconOk from "../../assets/icons/add-icon-ok.svg";
import ComprasIcon from "../../assets/icons/compras-icon.svg";
import ComprasIconOk from "../../assets/icons/compras-icon-press.svg";
import ProfileIcon from "../../assets/icons/profile-icon.svg";
import ProfileIconOk from "../../assets/icons/profile-icon-press.svg";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";

export function Navbar() {
  const { pathname } = useLocation();

  return (
    <>
      <div className="nav">
        <Link to="/">
          <Icon
            className="icon"
            src={pathname === "/" ? HomeIconOk : HomeIcon}
            alt={"iconeHome"}
          />
        </Link>
        <Link to="/despensa">
          <Icon
            className="icon"
            src={pathname === "/despensa" ? AddIconOk : AddIcon}
            alt={"iconeNotification"}
          />
        </Link>
        <Link to="/inserir-item">
          <Icon
            className="icon"
            src={pathname === "/inserir-item" ? ComprasIconOk : ComprasIcon}
            alt={"iconeAdd"}
          />
        </Link>
        <Link to="/login">
          <Icon
            className="icon"
            src={pathname === "/login" ? ProfileIconOk : ProfileIcon}
            alt={"iconeProfile"}
          />
        </Link>
      </div>
    </>
  );
}