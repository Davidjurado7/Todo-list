import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoTitle } from "../TodoTitle";
import './App.css'; 

function AppUI ({
    completedTodos,
    loading,
    error,
    totalTodos, 
    searchValue,
    setSearchValue,
    completeTodos,
    deleteTodos,
    searchTodos,
}) {
    return (

    <React.Fragment>
    <TodoTitle />

    <TodoCounter
      completedTodos={completedTodos}
      totalTodos={totalTodos} 
    />

    <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
     />
    
    <TodoList> 
      {loading && <p>Estamos cargando</p>}
      {error && <p>Tenemos un error</p>}
      {(!loading && !searchTodos.length) && <p>Crea tu primera tarea</p>}

      {searchTodos.map(todo => (
        <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => {completeTodos(todo.text)}}
          onDelete={() => {deleteTodos(todo.text)}}
          />
      ))}
    </TodoList>

    <CreateTodoButton/>
     
  </React.Fragment>
    )
} 

export { AppUI };