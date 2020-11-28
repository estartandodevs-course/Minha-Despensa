import "./icon-navbar.scss"

export function Icon(props){
    const {src, onClick, alt} = props
    
    return <img className="icon" src={src} alt={alt} onClick={onClick}/>
}