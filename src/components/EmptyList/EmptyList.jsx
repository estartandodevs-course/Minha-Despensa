import React from 'react';
import {Button} from '../Button/Button';
import  ImgEmptyList  from '../../assets/img/ImgEmptyList.svg'

import './EmptyList.scss'

export function EmptyList(props) {
  const { alt, desc, subTitle} = props

  return (
    <div className="container-emptyList">
      <img src={ImgEmptyList} alt={alt}/>
      <p>{desc}</p>
      <h2>{subTitle}</h2>
      <Button value="Vamos lá!"/>
    </div>
  )
}