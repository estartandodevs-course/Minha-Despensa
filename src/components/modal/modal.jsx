import React from 'react'
import './modal.scss'
export function ModalDelete() {
  return (
    <div className="container-modal">
      <div className="modal">
        <h2>Tem certeza que deseja excluir este item?</h2>
        <div className="container-button">
          <button>CANCELAR</button>
          <button>EXCLUIR</button>
        </div>
      </div>
    </div>
  )
}

