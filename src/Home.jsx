import { useEffect, useState } from "react";
import Create from "./Create";
import axios from 'axios';

function Home() {

  const [todo, setTodo] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/get')
    .then(res=>setTodo(res.data))
    .catch(error=>console.log(error));
    
  },[])

  return (
    <div className="container">
      <h2 className="title">ToDo List</h2>

      <Create />

      {
        todo.length === 0 ? (
            <div className="empty"><h4>No record found</h4></div>
        ):
        (
            todo.map( todo => (
                <div className="todo-item">
                    {todo.task}
                </div>
            ))
        )
      }

    </div>
  );
}

export default Home;
