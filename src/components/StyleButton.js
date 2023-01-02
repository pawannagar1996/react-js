import "../App.css";


export default function StyleButton(props){

    const {type, label} = props
    return(
        <button className={type}>{label}</button>
    )
}