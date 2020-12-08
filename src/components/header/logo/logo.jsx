import React from 'react'
import { useLocation } from 'react-router-dom'
import ImgLogo from '../../../assets/img/img-logo.svg'
import './logo.scss'

export function Logo() {
  const visible = useLocation()
  return (
    (visible.pathname === "/")
    &&
    <div className="container-logo">
      <img className="header-logo" src={ImgLogo} alt="Logo" />
    </div>

  )
}

