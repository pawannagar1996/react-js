
import {Home} from "./pages/Home";
import Form from "./components/Form"

import "./App.css";
import ButtonComponent from "./components/EventTarget";

function App() {

  function handleEvent(event) {
    console.log(event)
   }
  function handleChildClick(event) {
    console.log(event)
   }

  return (<>
    {/* <Form/> */}
    {/* <Home/>  */}

    <ButtonComponent onEvent={handleEvent} onChildClick={handleChildClick}/>

   
    </>
  );
}




export default App;