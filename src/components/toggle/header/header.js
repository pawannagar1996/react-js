


function Header(props){

    const { title, onScreenChange } = props;

    function handleClick(event) {
        const id = event.target.id;
        onScreenChange(id);
      }

  return (  <header className="header">
    <section>
      <span>LOGO</span>
    </section>
    <section>
      <h3>{title}</h3>
    </section>
    <section>
      <nav>
        <ul className="header-nav">
          <li>
            <button id="home" onClick={handleClick}>HOME</button>
          </li>
          <li>
            <button id="about" onClick={handleClick}>About Us</button>
          </li>
        </ul>
      </nav>
    </section>
  </header>
)
}

export default Header