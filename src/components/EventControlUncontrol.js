
import {useState} from "react"


export default function ControlForm(){


const [Text, SetText] = useState()

    return(
        <div>
            <input type="text"  />
            <input type="submit" />
        </div>
    )
}