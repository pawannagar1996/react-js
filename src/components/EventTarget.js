import "../App.css";
function ButtonComponent(props) {
    const { 
      onEvent: handleEvent,
      onChildClick: handleChildClick
    } = props;
    return (

        <ul className="nav">
            <li onClick={handleEvent}>Home</li>
            <button onclick={handleChildClick}>Click</button>
            {/* <li onclick={handleChildClick}><a href="/" onclick={handleEvent}>About</a></li>
            <li onclick={handleChildClick}><a href="/" onclick={handleEvent}>Service</a></li> */}
        </ul>


    //   <button onClick={handleEvent} onKeyUp={handleEvent}>
    //     <span onClick={handleChildClick}>icon</span>
    //     <span>submit</span>
    //   </button>
    )
  }
  
  export default ButtonComponent;