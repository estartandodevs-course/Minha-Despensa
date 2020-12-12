import React from "react";
import "./modal.scss";

export function ModalDelete(props) {
  const {onCancel, onDelete, isOpen} = props
 
  return (
    <div className={isOpen ? "container-modal active " : "container-modal"}>
      <div className="modal">
        <h2>Tem certeza que deseja excluir este item?</h2>
        <div
          className="container-button "
        >
          <button onClick={onCancel}>CANCELAR</button>
          <button onClick={onDelete}>EXCLUIR</button>
        </div>
      </div>
    </div>
  );
}
