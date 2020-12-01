import React from 'react'

import { Arrow } from '../../components/header/arrow/arrow'
import { Title } from '../../components/header/title/title'
import { Menu } from '../../components/header/menu/menu'

import './header.scss'
import { Logo } from './logo/logo'
import { Link } from 'react-router-dom'

export function Header(props) {
  const { text } = props
  return (
    <div className="container-header">
      <Link to="/">
        <Arrow />
      </Link>
      <Title text={text} />
      <Menu />
    </div>
  )
}

export function HeaderLogo() {
  return(
    <div className="container-header">
      <Logo/>
    </div>
  )
}
