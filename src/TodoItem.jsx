function getColor(isDone){
    return isDone ? 'lightpink' :'lightgreen'
}
export function TodoItem({todo,onDone}){
    const {id,title,isDone}=todo
return (
<div style={{background:getColorisDon}}>
{title}
{!isDone&&<button onClick={()=>onDone(id)}></button>}
</ div>
)
}