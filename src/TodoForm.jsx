import { useState } from "react";

function TodoForm({onAdd}){
    const [title,setTitle]=useState('')
}
function handleSubmit(e){
    e.preventDefault()
    if(title.trim()==='') 
        return
    onAdd(title)
    setTitle('')
}