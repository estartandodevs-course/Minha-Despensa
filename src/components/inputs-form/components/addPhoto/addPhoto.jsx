import React from "react";
import "./addPhoto.scss"


export function AddPhoto() {

  return (
    <>
    <label>foto</label>
    <div className="container-photo">
    <input className="addPhoto" type="file"/>
    </div>
    </>
  );
}
