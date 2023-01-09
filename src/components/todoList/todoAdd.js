
import {useState } from "react";

export default function TodoAdd(){
    const [text, newText] = useState("")

    function textChange(event) {
        newText(event.target.value);
        console.log(event)
      }
    function handleValue(event) {
        console.log(event)
      }
    return(
        <div className="AddButton">
        <input type="text" value={text} onChange={textChange}/>
        <button onClick={handleValue} >Add</button>
        <li>{text}</li>
        </div>
    )
}