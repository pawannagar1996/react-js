import "../App.css";
function ButtonComponent(props) {
  const { onEvent: handleEvent, onChildClick: handleChildClick } = props;

  function handleEvent(event) {
    console.log(event);
  }

  function handleChildClick(event) {
    console.log(event);
  }
  return (
    <>
      <ul className="nav">
        <li onClick={handleEvent}>
          <p>Home</p>
        </li>
        <button onclick={handleChildClick}>Click</button>
        <a href="https://google.com" onClick={handleEvent}>
          Google.com
        </a>
        {/* <li onclick={handleChildClick}><a href="/" onclick={handleEvent}>About</a></li>
            <li onclick={handleChildClick}><a href="/" onclick={handleEvent}>Service</a></li> */}
      </ul>

      <button onClick={handleEvent} onKeyUp={handleEvent}>
        <span onClick={handleChildClick}>icon</span>
        <span>submit</span>
      </button>
    </>
  );
}

export default ButtonComponent;
