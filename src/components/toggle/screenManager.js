import { useState } from "react";
import Header from "./header/header";
import AboutScreen from "./screen/aboutScreen";
import HomeScreen from "./screen/homeScreen";


function ScreenManager(){
    const [currentScreen, changeCurrentScreen] = useState("home");

    function renderScreen(){

    if(currentScreen==="home"){
        return (<HomeScreen/>) 
    }
    if(currentScreen==="about"){
        return(<AboutScreen title={currentScreen} />)
    }else {
        return (<section>No screen</section>)
      }
    }

    return(<div>
        <Header onScreenChange={changeCurrentScreen} title={currentScreen}/>
        {renderScreen() }
        </div>
    )

}

export default ScreenManager