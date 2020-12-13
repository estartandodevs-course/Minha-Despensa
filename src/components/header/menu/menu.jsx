import React, { useState } from 'react'
import { useLocation } from "react-router-dom"

import ImgMenu from '../../../assets/icons/navigation-drawer.svg'
import './menu.scss'


export function Menu(props) {
  const {openDeleteModal} = props
  const [menu, setMenu] = useState(false)
  const location = useLocation()

  function menuShow() {
    setMenu(!menu)
  }

  return (
    (location.pathname === "/inserir-item")
    &&
    <>
      <img className="header-menu" src={ImgMenu} alt="Menu" onClick={menuShow} />
          <div className={menu ? 'container-menu active':'container-menu'}>
            <ul>
              <li onClick={openDeleteModal}>Excluir item</li>
            </ul>
          </div>

    </>
  )

}

