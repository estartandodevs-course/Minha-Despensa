import "./icon-navbar.scss"

export function Icon(props){
    const {src, onClick, alt, className} = props
    
    return <img className={className} src={src} alt={alt} onClick={onClick}/>
}