import React from "react";
import "./addPhoto.scss"

export function AddPhoto(props) {
  const { onChange, name, value, src } = props

  return (
    <div>
      <label className="new-addPhoto">Foto
      <div className="addPhoto-content">
          <div className="addPhoto">
            <input id="photo"
              className="addPhoto"
              type="file"
              onChange={onChange}
              name={name}
              value={value}
            />
            <img className="imagem"
              src={src}
              alt="Produto"
            />
            <p>Adicione uma imagem</p>
          </div>
        </div>
      </label>
    </div>
  );
}
