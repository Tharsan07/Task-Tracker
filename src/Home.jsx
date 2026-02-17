import { useEffect, useState } from "react";
import Create from "./Create";
import axios from 'axios';
import { FaTrash } from "react-icons/fa";

function Home() {

  const [todo, setTodo] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/get')
    .then(res=>setTodo(res.data))
    .catch(error=>console.log(error));
    
  },[])

  const handleEdit = (id) => {
  axios.put(`http://localhost:3000/update/${id}`)
    .then(() => {
      setTodo(prev =>
        prev.map(item =>
          item._id === id
            ? { ...item, done: !item.done }
            : item
        )
      );
    })
    .catch(err => console.log(err));
};


const handleDelete = (id) => {
  axios.delete(`http://localhost:3000/delete/${id}`)
    .then(() => {
      setTodo(prev => prev.filter(item => item._id !== id));
    })
    .catch(err => console.log(err));

};
  return (
    <div className="container">
      <h2 className="title">ToDo List</h2>

      <Create setTodo={setTodo} />

      {
        todo.length === 0 ? (
            <div className="empty"><h4>No record found</h4></div>
        ):
        (
  todo.map((todo) => (
    <div className="todo-item" key={todo._id}>
      <input
  type="checkbox"
  checked={todo.done}
  onChange={() => handleEdit(todo._id)}
/>

      <span className={todo.done ? "strike" : ""}>
        {todo.task}
      </span>

      <FaTrash onClick={()=>handleDelete(todo._id)} className="delete-icon" />
    </div>
  ))
)

      }

    </div>
  );
}

export default Home;
