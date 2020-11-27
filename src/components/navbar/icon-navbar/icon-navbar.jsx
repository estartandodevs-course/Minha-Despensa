import "./icon-navbar.scss"

export function Icon(props){
    const {src, onClick} = props
    
    return <img className="icon" src={src} onClick={onClick}/>
}