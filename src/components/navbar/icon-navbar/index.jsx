export function Icon(props){
    const {src, onClick} = props
    
    return <img src={src} onClick={onClick}/>
}