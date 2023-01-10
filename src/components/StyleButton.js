import "../App.css";


export default function StyleButton(props){

    const {type, label, icon} = props

function getClasses(){
    let classes = "btn";

    if(type === "primary") {
        classes += " primary-btn";
      } else if(type === 'normal'){
        classes += " normal-btn";
      } else if(type === "danger") {
        classes += " danger-btn"
      } 
      return classes;
    }

    return(
        <button className={getClasses()}>
            {icon && <span className="icon-p">{icon}</span>}
            {label}</button>
    )
}



export default function StyleButton(props){

    const {type, label, icon} = props

function getClasses(){
    let classes = "btn";

    if(type === "primary") {
        classes += " primary-btn";
      } else if(type === 'normal'){
        classes += " normal-btn";
      } else if(type === "danger") {
        classes += " danger-btn"
      } 
      return classes;
    }

    return(
        <button className={getClasses()}>
            {icon && <span className="icon-p">{icon}</span>}
            {label}</button>
    )
}