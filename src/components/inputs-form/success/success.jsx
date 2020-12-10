import { useState } from "react"
import "./success.scss"

export function Success(props){
    const {text} = props
    const [styles, setStyles] = useState({display: "none"})

    function Alert(){
        setTimeout(()=>{
            setStyles({display: 'flex'})
        }, 5500)
        return styles
    }

    return (
        <div style={Alert()} className="success-alert">
            <span className="text-success">{text}</span> 
        </div>
    )

}