import React from 'react';

import { Link } from 'react-router-dom'

import { SearchBar } from '../../components/search-bar/search-bar.jsx'

export function DespensaVazia() {
  return (
    <>
      <div className="container">
        <div className="mock">
          <h1>despendaVazia</h1>
          <Link to="/despensa">
            <p>ir para despensa</p>
          </Link>

          <SearchBar
            type="text"
            name="nome"
            placeholder="O que você procura?"
          />
        </div>
      </div>
    </>
  )
}