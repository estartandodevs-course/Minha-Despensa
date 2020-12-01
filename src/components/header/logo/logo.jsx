import { render } from '@testing-library/react'
import React, {useState} from 'react'
import ImgLogo from '../../../assets/img/img-logo.svg'
export function Logo() {
  
    return (
      <img className="header-logo" src={ImgLogo} alt="Logo"/>
    )
  }

