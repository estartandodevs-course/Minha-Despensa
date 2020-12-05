import React, { useState } from 'react';

import './search-bar.scss'
import Imgsearch from '../../assets/icons/busca.svg'


export function SearchBar() {
  const [filter, setFilter] = useState("")

  function onChange(e) {
    setFilter(e.target.value)
  }


  return (
    <>
      <h2 className="search-title">Pesquisa</h2>
      <div className="search-container">
        <img className="search-img" src={Imgsearch} alt="Lupa" />
        <input className="search-input"
          type="text"
          value={filter}
          placeholder="O que você procura?"
          onChange={onChange} />
      </div>
    </>
  )
}