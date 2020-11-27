import React from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom'


import './emptyList.scss'

export function EmptyList(props) {
  const { src, alt, desc, subTitle } = props

  return (
    <div className="container-emptyList">
      <img src={src} alt={alt} />
      <p>{desc}</p>
      <h2>{subTitle}</h2>
      <Link to="/despensa">
        <Button value="Vamos lá!" />
      </Link>
    </div>
  )
}