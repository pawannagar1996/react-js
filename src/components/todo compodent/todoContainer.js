import AddTodoComponent from "./addTodo";
import TodoListComponent from "./todoListCompodent";
import { useState } from 'react';


function TodoContainerComponent() {

    const [todos, updateTodos] = useState()

    function addTodo(text) {
        const item = {
          id: ''+Date.now(),
          text,
          status: 'active',
          editing: false
        }
        const newTodos = [...todos];
        newTodos.push(item);
        updateTodos(newTodos);
      }



    return (
        <div>
          <AddTodoComponent addTodo={addTodo} />
          <TodoListComponent todos={todos}/>
        </div>
      )
    }
    
    export default TodoContainerComponent;