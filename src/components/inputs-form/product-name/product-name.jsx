import React, { useState } from 'react';
import './product-name.scss'


export function ProductName({setForm}){
    
    const [name, setName] = useState("")
   // const [form, setForm] = useState({});
    
  
  
   function onChange(e) {
      setName(e.target.value)
      setForm(e.target.value)
      console.log(name);
   }
    
    return (
        <>
          <h2 className="product-title"> Nome </h2>
          <div className="container-product">
            <input className="product-input"
              name='productName'
              type="text"
              value={name}
              placeholder="Informe o nome do item"
              onChange={onChange}
              
              />
          </div>
        </>
    )
}