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
      } else {
        classes = "";
      }
      return classes;
    }

    return(
        <button className={getClasses()}>
            {icon && <span>{icon}</span>}
            {label}</button>
    )
}