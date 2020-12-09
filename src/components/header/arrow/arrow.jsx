import React from 'react'
import { useLocation } from 'react-router-dom'

import arrow from '../../../assets/icons/header-arrow.svg' 
import './arrow.scss'
export function Arrow() {
  const visible = useLocation()
  return (
   (visible.pathname !== "/")  && <img className="header-arrow" src={arrow} alt="Seta"/>
  )
}

