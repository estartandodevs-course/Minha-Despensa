import React from 'react';

import { Link } from 'react-router-dom'

export function DespensaVazia() {
  return (
    <>
    <h1>despendaVazia</h1>
    <Link to="/despensa">
      <p>ir para despensa</p>
    </Link>
    </>
  )
}