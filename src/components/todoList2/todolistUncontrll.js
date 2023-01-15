import { useRef, useState } from "react";
import "./todolistUncontroll.css";

export default function TodoListUncntl() {
  const currentRef = useRef();
  const [currentValue, updateValue] = useState([]);
  const [oldSerialNumber, updateSerialNumber] = useState(1);
  // const [oldStatus,newStatus] = useState("pending")


  function handleAddTodo() {
    const newText = currentRef.current.value;
    let todos ={
      id: ""+Date.now(),
      text: newText,
      serialNumber: oldSerialNumber,
      status:"active",
    };
  ;
    const newTodos = JSON.parse(JSON.stringify(currentValue));
    newTodos.push(todos);
    updateValue(newTodos);
    currentRef.current.value = "";
    updateSerialNumber(oldSerialNumber + 1);
  }

  function changeLi(event){
    let id = event.target.id;
    id = id.split('--')[1];
    console.log(id)
    const index = currentValue.findIndex((todo) => id === todo.id);
    const todo = {...currentValue[index], status:'done'}
    const newTodos = [...currentValue];
    newTodos[index] = todo;
    updateValue(newTodos);

  }
  function getTodoStatusClass(status){

    if (status === "active"){
return "pending-li"
    }
   else if (status === "done"){
return "done-li"
    }
    else{
      return ""
    }
  }


  function renderList(items) {
    const { id, text, serialNumber, status} = items;
    
    return (
      <div key={id}>
        <li className={getTodoStatusClass(status)}>
          <span className="serial-number">{serialNumber}</span>
          <span className="text">{text}</span>
       
          <div className="button-section">
            <button className="btn edit">Edit</button>
            <button className="btn pending" id={'btn-done--'+id}
                  disabled={status === 'done'} onClick={changeLi}>{status}</button>
            <button className="btn delete" >delete</button>
          </div>
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
            <span className="serial-number">S. No.</span>
            <span className="text">Todo List</span>
          </li>
        </div>
      </ol>

      <ol>{currentValue.map(renderList)}</ol>
    </div>
  );
}


