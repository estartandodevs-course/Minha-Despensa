import React from 'react'
import {useLocation} from "react-router-dom"

import ImgMenu from '../../../assets/icons/navigation-drawer.svg'
import './menu.scss'

export function Menu() {
  const location = useLocation()
  return (location.pathname === "/form") && <img  className="header-menu" src={ImgMenu} alt="Menu"/>
  
}

