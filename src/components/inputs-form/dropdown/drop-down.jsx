import React, { useState } from 'react'
import DropDown from 'react-dropdown'
import './drop-down.scss'
import arrow from '../../../assets/icons/arrow-down.svg'


export function DropDownAb(props){
    const {options, title, placeholder} = props
    
    let [valor, setValor] = useState('')
    
    

    return(
        <>
            <div className="container-select">
                <h2>{title}</h2>
                <img className='arrow' src={arrow} alt="arrow to down"/>
                <DropDown 
                    className='select' 
                    placeholderClassName='place' 
                    menuClassName='menu'
                    controlClassName='control'
                    options={options} 
                    value={valor} 
                    onChange={e=>{
                        setValor(valor = e.value) 
                        console.log(valor)
                    }}
                    placeholder={placeholder}
                    
                />
                
            </div>
        </>
    )
}
/* 
e=>{
                            setValor(e.value) 
                            console.log(valor)
                    }}
} */