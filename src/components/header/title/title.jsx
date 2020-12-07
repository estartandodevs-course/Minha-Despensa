import React from 'react'
import './title.scss'
export function Title(props) {
  const { text } = props

  return (
    <div className="container-title">
      <h1 className="header-title">{text}</h1>
    </div>
  )
}
