import React from 'react'
import "./todolist.css";

function TodoList({id,title,status}) {
  return (
    <div>
       <ul>
           <li>The Task name is <span className='title'>{title}</span>  and the id of the task is <span className='id'>{id}</span>  and status is <span className='status'>{status}</span> </li>
       </ul>
    </div>
  )
}

export default TodoList
