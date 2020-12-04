import { useState } from "react"
import "./success.scss"

export function Success(){
    const [styles, setStyles] = useState({display: "flex"})

    function Alert(){
        setTimeout(()=>{
            setStyles({display: 'none'})
        }, 5500)
        return styles
    }

    return (
        <div style={Alert()} className="success-alert">
            <span className="text-success">Item adicionado com sucesso</span> 
        </div>
    )

}