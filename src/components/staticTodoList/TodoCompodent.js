import AddTodo from "./Add";
import ListContainer from "./css/ListContainer";
import "./css/todo.css"

function TodoCompodents() {
  return (
    <div className="todo-cover">
      <AddTodo/>
     <ListContainer/>
    </div>
  );
}

export default TodoCompodents;
