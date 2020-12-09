import React, { useState } from 'react'
import { useLocation } from "react-router-dom"

import ImgMenu from '../../../assets/icons/navigation-drawer.svg'
import './menu.scss'


export function Menu() {
  const [menu, setMenu] = useState(false)
  const location = useLocation()

  function menuShow() {
    setMenu(!menu)
  }

  return (
    (location.pathname === "/form")
    &&
    <>
      <img className="header-menu" src={ImgMenu} alt="Menu" onClick={menuShow} />
          <div className={menu ? 'container-menu active':'container-menu'}>
            <ul>
              <li>Adicionar na Lista de Compra</li>
              <li>Excluir item</li>
            </ul>
          </div>

    </>
  )

}

