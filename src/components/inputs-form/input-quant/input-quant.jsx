import { Icon } from "../../navbar/icon-navbar/icon-navbar"
import "./input-quant.scss"
import iconMais from "../../../assets/icons/icon-mais.svg"
import iconMenos from "../../../assets/icons/icon-menos.svg"
import { useState } from "react"
export function Quant(){
    const [quant, setQuant] = useState(0)
    
    function Mais(){
        setQuant(quant+1)
    }

    function Menos(){
        if (quant === 0){
            setQuant(quant)
        }else{
            setQuant(quant-1)
        }
    }

     function onChange(qnt){
        setQuant(parseInt(qnt.target.value))
     }

    return(
        <>
        <h2 className="quant-title"> Qtde. </h2>
        <div className="quant-section">
            <Icon onClick={Menos} className={"icon-menos"} src={iconMenos}/>
            <input onChange={onChange} className="input-quant" type="number" value={quant}/>
            <Icon onClick={Mais} className={"icon-mais"} src={iconMais}/>
        </div>
        </>
    )
}