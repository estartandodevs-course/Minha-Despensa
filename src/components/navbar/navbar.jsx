import { Icon } from "./icon-navbar/icon-navbar";
import "./navbar.scss";
import HomeIcon from "../../assets/icons/home-icon.svg";
import HomeIconOk from "../../assets/icons/home-icon-ok.svg";
import AddIcon from "../../assets/icons/add-icon.svg";
import AddIconOk from "../../assets/icons/add-icon-ok.svg";
import ComprasIcon from "../../assets/icons/compras-icon.svg";
import ComprasIconOk from "../../assets/icons/compras-icon-press.svg";
import DespensaIcon from "../../assets/icons/despensa-icon.svg";
import DespensaIconOk from "../../assets/icons/despensa-icon-press.svg";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";

export function Navbar() {
  function IsHome() {
    let data = useLocation();
    if (data.pathname === "/") {
      return HomeIconOk;
    } else {
      return HomeIcon;
    }
  }

  function IsAdd() {
    let data = useLocation();
    if (data.pathname === "/inserir-item") {
      return AddIconOk;
    } else {
      return AddIcon;
    }
  }

  function IsMarket() {
    let data = useLocation();
    if (data.pathname === "/compras") {
      return ComprasIconOk;
    } else {
      return ComprasIcon;
    }
  }

  function IsDespensa() {
    let data = useLocation();
    if (data.pathname === "/despensa") {
      return DespensaIconOk;
    } else {
      return DespensaIcon;
    }
  }

  return (
    <>
      <div className="nav">
        <Link to="/">
          <Icon className="icon" src={IsHome()} alt={"iconeHome"} />
        </Link>
        <Link to="/despensa">
          <Icon className="icon" src={IsDespensa()} alt={"iconeNotification"} />
        </Link>
        <Link to="/inserir-item">
          <Icon className="icon" src={IsAdd()} alt={"iconeAdd"} />
        </Link>
        <Link to="/">
          <Icon className="icon" src={IsMarket()} alt={"iconeProfile"} />
        </Link>
      </div>
    </>
  );
}
