import React, { useState } from 'react'
import axios from "axios";

function Create({ setTodo }) {

  const [task,setTask]=useState("");

const handleAdd = () => {
  axios.post("http://localhost:3000/add", { task: task })
    .then((res) => {
      setTodo(prev => [...prev, res.data]); // 🔥 update parent state
      setTask("");
    })
    .catch(error => console.log(error));
};


  return (
    <div className='form'>
      <input  className="input" type='text'  onChange={(e)=>setTask(e.target.value)} placeholder='Enter the task'/>
      <button  className="btn" onClick={handleAdd}>Add task</button>
    </div>
  )
}

export default Create;
