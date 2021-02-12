import React from "react";
import "./addPhoto.scss"

export function AddPhoto(props) {
  const {onChange,name, value} = props

  return (
    <div>
      <label className="new-addPhoto">Foto
      <div className="addPhoto-content">
          <div className="addPhoto">
            <input id="photo"
              className="addPhoto"
              type="file"
              onChange={(e) => onChange(e)}
              name={name}
              value={value}
            />
            <p>Adicione uma imagem</p>
          </div>
        </div>
      </label>
    </div>
  );
}
