import React from "react";
import "../App.css";
import { FcFullTrash } from "react-icons/fc";

const Todo = ({ todo, removeTodo, completeTodo}) => {
  
  return (
    <div className="todo" >
      <div className="content">
        <label className="custom-checkbox">
          <input type="checkbox" onClick={() => completeTodo(todo.id)}/>
          <span className="checkmark"></span>
        </label>
        <p>{todo.text}</p>
        <p className="category">{todo.category}</p>
      </div>
      <div className="buttonContainer">
        <button onClick={() => removeTodo(todo.id)}>
          <FcFullTrash size={20} />
        </button>
      </div>
    </div>
  );
};

export default Todo;