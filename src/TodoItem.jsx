function getColor(isDone){
    return isDone ? 'lightpink' :'lightgreen'
}
function TodoItem({ todo, onDone, deleteT, editTodo }){
    const {id,title,isDone}=todo
return (
<div style={{background:getColor(isDone)}}>
{title}

{!isDone&&<button onClick={()=>onDone(id)} >בוצע  </button>}
        {isDone && <button onClick={() => deleteT(id)}>מחק ❌</button>}
        {<button onClick={() => editTodo(id)}>ערוך 📝</button>}

</ div>
)
}
export default TodoItem