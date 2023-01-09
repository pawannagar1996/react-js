

export default function TodoButton(props){
const {type, label}=props

function getClasses(){
    let classes = "btn";
    if(type === "edit"){
        classes += " edit"
    }
    else if(type === "done"){
        classes += " done"
    }
    else if(type === "delete"){
        classes += " delete"
    }
    return classes

}
    return(
       
            <button className={getClasses()}>{label}</button>
       

    )
}