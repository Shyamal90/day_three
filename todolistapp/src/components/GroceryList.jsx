import React from 'react'
import "./Grocery.css";

function GroceryList({id,title,status,index,deleteItem}) {

  
  return (
    <div className='container'>
       <span>{index}. {title}</span>
       <button onClick={()=>deleteItem(id)}>Delete</button>
    </div>
  )
}

export default GroceryList
