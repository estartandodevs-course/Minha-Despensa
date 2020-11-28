import React, { useState } from 'react';

import './search-bar.scss'
import Imgsearch from '../../assets/icons/busca.svg'


export function SearchBar(props) {
  const { type, name, placeholder } = props
  const [filter, setFilter] = useState("")

  function onChange(e) {
    setFilter(e.target.value)
  }


  return (
    <>
      <h2>Pesquisa</h2>
      <div className="search-container">
        <img src={Imgsearch} />
        <input
          type={type}
          name={name}
          value={filter}
          placeholder={placeholder}
          onChange={onChange} />
      </div>
    </>
  )
}