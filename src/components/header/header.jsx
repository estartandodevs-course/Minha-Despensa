import React from "react";

import { Arrow } from "../../components/header/arrow/arrow";
import { Title } from "../../components/header/title/title";
import { Menu } from "../../components/header/menu/menu";
import { useLocation } from "react-router-dom";

import "./header.scss";
import { Logo } from "./logo/logo";
import { Link } from "react-router-dom";

export function Header(props) {
  const { pathname } = useLocation();
  const validPathname = (pathname) => {
    let pathLet = "";
    if (pathname.includes("-")) {
      pathLet = pathname.replace("-", " ");
      return pathLet.replace("/", "");
    }

    return pathname.replace("/", "");
  };
  return (
    <div className="container-header">
      <Link to="/">
        <Arrow />
      </Link>
      <Logo />
      <Title text={validPathname(pathname)} />
      <Menu />
    </div>
  );
}
