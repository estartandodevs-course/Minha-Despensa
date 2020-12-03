import React from 'react'
import './checkbox.scss'
export function Checkbox() {
  return (
    <>
    <div className="radio">
      <input id="fechado" className="input-fechado" type="radio" name="status" value="Fechado" />
      <label for="fechado" className="label-fechado">Fechado</label>
    </div>
    <div className="radio">
      <input id="aberto" className="input-aberto" type="radio" name="status" value="Em uso" />
      <label for="aberto" className="label-aberto">Em uso</label>
    </div>
    <div className="radio">
      <input id="acabou" className="input-acabou" type="radio" name="status" value="Acabou" />
      <label for="acabou" className="label-acabou">Acabou</label>
    </div>

        </>
  )
}
