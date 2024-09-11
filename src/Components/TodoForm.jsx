import { useState } from "react";
import "../App.css";


const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState();
  const [category, setCategory] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  };
  return (
    <div className="container">
      <div className="header">
        <h2>Criar nova tarefa</h2>
      </div>
      <div className="app">
        <form onSubmit={handleSubmit}>
          <h3>Título da tarefa</h3>
          <div className="form-group">
            <input
              type="text"
              placeholder="Título da tarefa"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Selecione uma categoria</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Estudos">Estudos</option>
              <option value="Pessoal">Pessoal</option>
            </select>
          </div>
          <button type="submit">Criar</button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
