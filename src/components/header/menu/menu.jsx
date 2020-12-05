import React from 'react'
import {useLocation} from "react-router-dom"

import ImgMenu from '../../../assets/icons/navigation-drawer.svg'
import './menu.scss'

export function Menu() {
  const location = useLocation()
  if(location.pathname === "/form"){
    return  <img  className="header-menu" src={ImgMenu} alt="Menu"/>
  }else{
    return <img  className="header-menu" src={ImgMenu} alt="Menu" style={{visibility: "hidden"}}/>
  }
 
}

