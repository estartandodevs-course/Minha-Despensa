import React from "react";
import "./addPhoto.scss"


export function AddPhoto() {

  return (
    <div>
      <label for="photo" className="new-addPhoto">Foto
      <div className="addPhoto-content">
          <div className="addPhoto">
            <input id="photo"
              className="addPhoto"
              type="file"
            />
            <p>Adicione uma imagem</p>
          </div>
        </div>
      </label>
    </div>
  );
}
