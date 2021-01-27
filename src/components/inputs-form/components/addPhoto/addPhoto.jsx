import React from "react";
import "./addPhoto.scss"


export function AddPhoto() {

  return (
    <div className="container-photo">
      <label>foto</label>
      <div className="photo">
        <input className="addPhoto" type="file" />
      </div>
    </div>

  );
}
