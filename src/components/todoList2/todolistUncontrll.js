import { useRef, useState } from "react";
import "./todolistUncontroll.css";

// export default function TodoListUncntl() {
//   const inputref = useRef();
//   const [todos, updateTodos] = useState([]);

//   function handleAddTodo(event) {
//     console.log(inputref.current.value);

//     const newText = inputref.current.value;
//     const todo = { id: Date.now(), text: newText };
//     const newTodos = JSON.parse(JSON.stringify(todos));
//     newTodos.push(todo);
//     updateTodos(newTodos);
//     inputref.current.value = "";
//   }

//   function renderList(todoItem) {
//     const { id, text } = todoItem;
//     return (
//       <li key={id}>
// <span>{id}</span>
//         <span>{text}</span>
//         {/* <span>{status}</span> */}
//       </li>
//     );
//   }

//   return (
//     <div>
//       <div>
//         <input type="text" ref={inputref} />
//         <input type="button" value="Add" onClick={handleAddTodo} />
//       </div>
//       <ul>{todos.map(renderList)}</ul>
//     </div>
//   );
// }

export default function TodoListUncntl() {
  const currentRef = useRef();
  const [currentValue, updateValue] = useState([]);
  const [oldSerialNumber, updateSerialNumber] = useState(1);

  function handleAddTodo(event) {
    const newText = currentRef.current.value;
    const todos = {
      id: Date.now(),
      text: newText,
      serialNumber: oldSerialNumber,
    };
    const newTodos = JSON.parse(JSON.stringify(currentValue));
    newTodos.push(todos);
    updateValue(newTodos);
    currentRef.current.value = "";
    updateSerialNumber(oldSerialNumber + 1);
  }

  function renderList(items) {
    const { id, text, serialNumber } = items;
    return (
      <div key={id}>
        <li>
          <span className="serial-number">{serialNumber}</span>
          <span className="text">{text}</span>
        </li>
      </div>
    );
  }
  return (
    <div className="wrappertodo">
      <div className="input">
        <label htmlFor="addtodo">
          <h2>enter daily todo</h2>
        </label>
        <input type="text" name="addtodo" ref={currentRef} />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <ol>
        <div>
          <li>
            <span className="serial-number">Serial Number</span>
            <span className="text">Todo List</span>
          </li>
        </div>
      </ol>

      <ol>{currentValue.map(renderList)}</ol>
    </div>
  );
}


