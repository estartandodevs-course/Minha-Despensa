import React from 'react';
import {Button} from '../Button/Button';
import './EmptyList.scss'

export function EmptyList(props) {
  const {src, alt, desc, subTitle} = props

  return (
    <div className="container-emptyList">
      <img src={src} alt={alt}/>
      <p>{desc}</p>
      <h2>{subTitle}</h2>
      <Button value="Vamos lá!"/>
    </div>
  )
}