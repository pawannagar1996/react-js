import "../App.css";

export default function List() {
  function anchorButton(event) {
    console.log(event);
  }
  return (
    <div>
      <ul className="list">
       
          <li>
          <a href="/">
            <h2>Lorem lipsum</h2>
            <p>
              Lorem Ipsum doesn exist because people think the content is
              meaningless window dressing, only there to be decorated by
              designers who can be bothered to read. Lorem Ipsum exists because
              words are powerful. If you fill up your page with draft copy about
              your client’s business, they will read it. They will comment on
              it.
            </p>
              <button>I</button>
              <button>E</button>
              <button>D</button>
              </a>
          </li>
          
          <li>
          <a href="/">
            <h2>Lorem lipsum</h2>
            <p>
              Lorem Ipsum doesn exist because people think the content is
              meaningless window dressing, only there to be decorated by
              designers who can be bothered to read. Lorem Ipsum exists because
              words are powerful. If you fill up your page with draft copy about
              your client’s business, they will read it. They will comment on
              it.
            </p>
              <button>I</button>
              <button>E</button>
              <button>D</button>
              </a>
          </li>
  
      </ul>
    </div>
  );
}
