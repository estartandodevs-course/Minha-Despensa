import React from 'react'

export function Title(props) {
  const {text} = props

  return (
  <h1 className="header-title">{text}</h1>
  )
}
