function getColor(isDone){
    return isDone ? 'lightpink' :'lightgreen'
}
export default function TodoItem({todo,onDone}){
    const {id,title,isDone}=todo
return (
<div style={{background:getColor(isDone)}}>
{title}
{!isDone&&<button onClick={()=>onDone(id)}></button>}
</ div>
)
}