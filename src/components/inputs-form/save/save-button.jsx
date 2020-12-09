import React, { useState } from 'react'
import { Button } from '../../Button/'

export function Save(props){
    const {onClick} = props
    return(
        <>
            <Button type="submit" value='Salvar' onClick={onClick} />
        </>
    )
}