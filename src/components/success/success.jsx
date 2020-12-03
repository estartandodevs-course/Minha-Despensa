import "./success.scss"

export function Success(){
    function Alert(){
        return {display: 'flex'}
    }

    return (
        <div style={Alert()} className="success-alert">
            <span className="text-success">Item adicionado com sucesso</span> 
        </div>
    )

}