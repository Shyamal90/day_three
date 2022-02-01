import React, { useState } from 'react'

function TodoInput({onClick}) {

    const [title, setTitle] = useState("");
    return (
        <div>
            <input type="text" placeholder='Please add something' value={title} onChange={(event)=> setTitle(event.target.value)}/>

            <button id='saveBtn' onClick={()=> onClick(title)} style={{marginLeft:"10px"}}>Save</button>
        </div>
        
    )
}

export default TodoInput
