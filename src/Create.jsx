import React, { useState } from 'react'
import axios from "axios";

function Create() {

  const [task,setTask]=useState();

const handleAdd=()=>{
    axios.post("http://localhost:3000/add",{task:task})//{key:value}
    .then(result => console.log(result))
    .catch(error => console.log(error))
  }

  return (
    <div className='form'>
      <input type='text'  onChange={(e)=>setTask(e.target.value)} placeholder='Enter the task'/>
      <button onClick={handleAdd}>Add task</button>
    </div>
  )
}

export default Create;
