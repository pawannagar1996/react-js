
import TodoButton from "./todoButton"

export default function TodoLayout(props){
const {serialNo,todoWork}=props
return( <a href="/">
   
        <li>
            {/* <div className="s-no">s.no</div>
            <div className="todo">todo</div> */}
            <div className="s-no">{serialNo}</div>
            <div className="todo"><p>{todoWork}</p>
            <section>
                <TodoButton type="edit" label="edit"/>
                <TodoButton type="done" label="done"/>
                <TodoButton type="delete" label="delete"/>

            </section>
            
            </div>
        </li>
       </a>

 
)
}