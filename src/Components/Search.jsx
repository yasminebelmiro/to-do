import React from "react";
import "../App.css";
import {
  TbSortAscendingLetters,
  TbSortDescendingLetters,
} from "react-icons/tb";

const Search = ({ search, setSearch, filter, setFilter, setSort }) => {
  return (
    <div>
      <div className="pesquisa">
        <h2>Pesquisar</h2>
        <input
          type="text"
          value={search}
          placeholder="Digite para pesquisar..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="filtro">
        <h2>Filtrar</h2>
        <div>
          <select value={filter} onChange={(e) => setFilter(e.target.value)} >
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
          <button onClick={() => setSort("Asc")}>
            <TbSortAscendingLetters size={20} color="#898AA6" />
          </button>
          <button  onClick={() => setSort("Desc")}>
            <TbSortDescendingLetters size={20} color="#898AA6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
