import React, { useState } from "react";

import Todo from "./Components/Todo";

import "./App.css";

import TodoForm from "./Components/TodoForm";
import Search from "./Components/Search";
const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "criar funcionalidade x",
      category: "(trabalho)",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Academia",
      category: "(pessoal)",
      isCompleted: false,
    },
    {
      id: 3,
      text: "estudar react",
      category: "(estudos)",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  const RemoveTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );

    setTodos(filteredTodos);
  };

  const CompleteTask = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
    console.log(newTodos);
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Lista de tarefas</h1>
        </div>

        <Search
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          setSort={setSort}
        />

        <div className="app">
          <div className="todo-list">
            {todos
              .filter((todo) =>
                filter === "All"
                  ? true
                  : filter === "Completed"
                  ? todo.isCompleted
                  : !todo.isCompleted
              )
              .filter((todo) =>
                todo.text.toLowerCase().includes(search.toLowerCase())
              )
              .sort((a, b) =>
                sort === "Asc"
                  ? a.text.localeCompare(b.text)
                  : b.text.localeCompare(a.text)
              )
              .map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  removeTodo={RemoveTodo}
                  completeTodo={CompleteTask}
                />
              ))}
          </div>
        </div>
      </div>
      <TodoForm addTodo={addTodo} />
    </>
  );
};

export default App;
