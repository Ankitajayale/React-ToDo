import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import  "./todo.css";

export default function ToDo() {
  let [todo, setToDo] = useState([{ task: "Sample task", id: uuidv4() }]);
  let [newToDo, setNewToDo] = useState("");
  let [isDone, setIsDone] = useState(false);

  let addTask = () => {
    setToDo((prevTodos) => {
      return [...prevTodos, { task: newToDo, id: uuidv4() , isDone : false }];
    });
    setNewToDo("");
  };

  let updateTask = (event) => {
    setNewToDo(event.target.value);
  };

  let deleteTodo = (id) => {
    setToDo((prevTodos) => todo.filter((prevTodos) => prevTodos.id != id));
  };

  let  markAllAsDone = () => {
    setToDo(
      todo.map((todo) => {
        return {
          ...todo,
          isDone : true,
        };
      }),
    );
  };

  let markAsDone = (id) => {
    setToDo((todo) =>
      todo.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
             isDone : true,
          };
        } else {
          return todo;
        }
      }),
    );
  };

  return (
    <div>
      <input placeholder="Add task" className = "input" value={newToDo} onChange={updateTask} />
      <br></br> <br></br>
      <button onClick={addTask} id="btn"> Add</button>
      <br></br>  
      <hr></hr>
      <h3> Task to complete!!</h3>
      <ul>
        {todo.map((todo) => {
          return (
            <li className="task-container" key={todo.id}> 
              <span style={todo.isDone ? {textDecoration:"line-through" } : {}}> {todo.task} </span>
              &nbsp; &nbsp; &nbsp;
              <button className="btn-delete" id="btn" onClick={() => deleteTodo(todo.id)}>DELETE</button>
              &nbsp; &nbsp;
              <button   id="btn" onClick={() => markAsDone(todo.id)}>
                Mark As Done 
             </button>
            </li>
          );
        })}
      </ul>
      <button id="btn" className="btn-done"onClick={markAllAsDone}>Mark all as done!!</button>
    </div>
  );
}
