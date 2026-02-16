import { useState } from "react";
import Create from "./Create";

function Home() {

  const [todo, setTodo] = useState([]);

  return (
    <div className="container">
      <h2>ToDo List</h2>

      <Create />

      {
        todo.length === 0 ? (
            <div><h4>No record found</h4></div>
        ):
        (
            todo.map( todo => (
                <div>
                    {todo}
                </div>
            ))
        )
      }

    </div>
  );
}

export default Home;
