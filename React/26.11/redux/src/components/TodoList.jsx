import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../store/slices/TodoReducer.js";

function TodoList() {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todo); // Access the todos from Redux store
  console.log(todos);

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch(ADD_TODO(newTodo));
      setNewTodo(""); // Clear the input after adding
    }
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ margin: "10px 0" }}>
            <span
              onClick={() => dispatch(TOGGLE_TODO(todo.id))}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(DELETE_TODO(todo.id))}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
