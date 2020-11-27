import React from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom'


import ImgEmptyList from '../../assets/icons/ImgEmptyList.svg'
import ComeBack from '../../assets/icons/comeBack-icon.svg'

import './empty-list.scss'

export function EmptyList(props) {
  const { description, subTitle } = props

  return (
    <div className="container-emptyList">
      <div className="container-imgs">
        <Link to="/">
          <img className="comeBack-img" src={ComeBack} alt="" />
        </Link>
        <img className="imgEmptyList-img" src={ImgEmptyList} alt="" />
      </div>

      <p>{description}</p>
      <h2>{subTitle}</h2>

      <Link to="/despensa">
        <Button value="Vamos lá!" />
      </Link>
    </div>
  )
}