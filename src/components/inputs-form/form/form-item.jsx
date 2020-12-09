import React, { useState } from 'react'

import { Calendar } from '../calendar/calendar'
import { Checkbox } from '../checkbox/checkbox'
import { ProductName } from '../product-name/product-name'
import { DropDownAb } from '../dropdown/drop-down'
import { Quant } from '../input-quant/input-quant'
import { Button } from '../../Button/Button'
import { itens }  from '../../../_mocks/mocks'

    const medidas = [ 'pct', 'kg', 'g', 'cx' ]
    const categorias = ['Limpeza', 'Mercearia', 'Perfumaria']

export function FormItens(props) {
    const [data, setData] = useState(...itens)
    const [form, setForm] = useState({name: ''})

    function addItem(){
       setData( ...itens, form)
       console.log(data)
    }
    function handleSubmit(e){
        e.preventDefault()
        addItem(form)
    }
  
    return (
        <form onSubmit={handleSubmit} >
          <ProductName setForm={setForm} />

          <div style={{display: 'flex'}} >
            <Quant />

            <DropDownAb 
              className='w190'
              arrowWidth='arrow190'
              title='Unidade de medida:' 
              placeholder='Unidades' 
              options={medidas} 
            />
          </div>

          <Calendar  />

          <DropDownAb 
            className='w328'
            arrowWidth='arrow328'
            title='Categoria:' 
            placeholder='Escolha uma categoria' 
            options={categorias}
            
            />

          <Checkbox  />

          <Button type='submit' value='Salvar' />
        </form>      
    )
  }
  