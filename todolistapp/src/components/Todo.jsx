import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';

function Todo() {
    const [data,setData] = useState([]);

    const handleData = (title)=>{
        const dataObj = {
            id:uuidv4(),
            title,
            status:false
        }

        setData([...data,dataObj]);
    }
  return (
    <div>
      <TodoInput onClick={handleData}/>
      {
          data.map((listData) =>{
            return  <TodoList key={listData.id} {...listData} />
          })
      }
    </div>
  )
}

export default Todo
