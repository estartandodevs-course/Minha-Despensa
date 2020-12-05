import React from 'react'
import DropDown from 'react-dropdown'
import './drop-down.scss'
import arrow from '../../../assets/icons/arrow-down.svg'


export function DropDownAb(props){
    const {width, options, title, placeholder} = props

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
                    options={options} /* onChange={this._onSelect} */ 
                    /* value={}  */
                    placeholder={placeholder}
                />
                
            </div>
        </>
    )
}
