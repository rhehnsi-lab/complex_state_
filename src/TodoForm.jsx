import { useState } from "react";

export function TodoForm({onAdd}){
    const [title,setTitle]=useState('')

function handleSubmit(e){
    e.preventDefault()
    if(title.trim()==='') 
        return
    onAdd(title)
    setTitle('')
}
return (
    <form onSubmit={handleSubmit}>
        <input value={title}
        onChange={(e)=>setTitle(e.target.value)}
         />
         <button type="submit">לאשר</button>
    </form>)
}