import React, { useState } from "react";
import styles from "./todo.module.css";
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [readValue, setreadValue] = useState("");
  const handleChange = (e) => {
    setreadValue(e.target.value);
  };
  return (
    <div>
      Todo
      <input value={readValue} onChange={handleChange} />
      <button
        onClick={() => {
          setTodos([...todos, { id: Date.now(), value: readValue }]);
          setreadValue("");
        }}
      >
        Add
      </button>
      <div  className={styles.todolist} >
        {todos.map((elem) => (
          <div className={styles.todo} key={elem.id}>
            <input type="checkbox" />
            <div>{elem.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
