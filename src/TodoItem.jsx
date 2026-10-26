
export function TodoItem({todo,onDone}){
    const {id,title,isDon}=todo
return (
<div style={{background:getColorisDon}}>
{title}
{!isDone&&<button onClick={()=>onDone(id)}></button>}
</ div>
)
}