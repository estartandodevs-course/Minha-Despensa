import "./success.scss";

export function Success(props) {
  const { text, style } = props;

  return (
    <div style={style} className="success-alert">
      <span className="text-success">{text}</span>
    </div>
  );
}
// const [styles, setStyles] = useState({display: "none"})

// function Alert(){
//     setTimeout(()=>{
//         setStyles({display: 'flex'})
//     }, 5500)
//     return styles
// }
