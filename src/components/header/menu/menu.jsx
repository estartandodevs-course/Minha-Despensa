import React, { useState } from "react";

import ImgMenu from "../../../assets/icons/navigation-drawer.svg";
import "./menu.scss";

export function Menu(props) {
  const { openDeleteModal, currentItem } = props;
  const [menu, setMenu] = useState(false);
  const isEdit = currentItem || false;

  function menuShow() {
    setMenu(!menu);
  }

  return (
    isEdit && (
      <>
        <img
          className="header-menu"
          src={ImgMenu}
          alt="Menu"
          onClick={menuShow}
        />
        <div className={menu ? "container-menu active" : "container-menu"}>
          <ul>
            <li onClick={openDeleteModal}>Excluir item</li>
          </ul>
        </div>
      </>
    )
  );
}
