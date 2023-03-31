import { useState } from "react";
import PopUp from "./popUp";
function MainPopUp(){

    const [popupClick, updatePopupClick] = useState(false);

    function showHideButton(){
  
        if(popupClick == false){
            updatePopupClick(true)
        }
        else{updatePopupClick(false)}
    }

    function renderPopup(){
    if(popupClick == true){

        return(<PopUp/>)
    }
}

    return(
        <div className="main">
            <button onClick={showHideButton}>Show Popup</button>
            {renderPopup()}

        </div>
    )
}
export default MainPopUp;