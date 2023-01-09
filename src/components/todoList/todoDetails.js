import TodoLayout from "./todoLayout";

const staticList =[
    {
        id:"01",
        serialNo:"01",
        todoWork:"khana khana"
    },
    {
        id:"02",
        serialNo:"02",
        todoWork:"gyutyufu"
    }
]

function TodoListDetails(){

    function renderList(data){
        const {id, serialNo, todoWork}=data
        return(
            <TodoLayout
            key={id}
            serialNo={serialNo}
            todoWork={todoWork}
          
            />
        )
    }

    return(
        <ul>
            {
                staticList.map(renderList)
            }
        </ul>
    )
}

export default TodoListDetails;