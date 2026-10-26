
import React from "react";
export function TodoList(){
    const [todos, setTodos] = useState([
        { id: 1, title: 'ללמוד ריאקט', isDone: true },
        { id: 2, title: 'לעשות שיעורי בית', isDone: false },
        { id: 3, title: 'לקנות חלב', isDone: false },
    ])
    function addTodo(title){
        const newTodo={id:Date.now(),title,isDone:false}
        setTodos([...todos,newTodo])
    }
    function markDone(){
        setTodos(todos.map((todo)=>todo.id===id?{...todo,isDone:true}:todo))
    }
    return
    (
        <div>
            <h1>my list todo</h1>
            
        </div>
    )

}