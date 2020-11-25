import React from 'react';
import './Button.scss'

export function Button(props) {
  const {value, onClick} = props

  return (
  <button className="button" onClick={onClick}>{value}</button>
  )
}