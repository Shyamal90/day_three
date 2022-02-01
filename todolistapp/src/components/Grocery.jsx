import React, { useState } from 'react'
import GroceryInput from './GroceryInput'
import GroceryList from './GroceryList'
import { v4 as uuidv4 } from 'uuid';

function Grocery() {
    let [data,setData] = useState([]);

    const handleData = (title)=>{
        const dataObj = {
            id:uuidv4(),
            title,
            status:false
        }

        setData([...data,dataObj]);
    }

    const deleteItem = (uniqId)=>{
      
      data = data.filter((list)=>{
        return list.id !== uniqId
      })

      setData(data);
   }
   
  return (
    <div>
      <GroceryInput onClick={handleData}/>
      {
          data.map((listData,index) =>{
            return  <GroceryList key={listData.key} {...listData} index={index+1}  deleteItem={deleteItem}/>
          })
      }
    </div>
  )
}

export default Grocery
