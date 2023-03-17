import React from "react";
import { SetFirstTodo } from "../SetFirstTodo";
import { TodoError } from "../TodoError";
import { TodoLoading } from "../TodoLoading";
import { TodoForm } from "../TodoForm";
import { Modal } from "../modal";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoTitle } from "../TodoTitle";
import './App.css'; 

function AppUI () {
    const {
      loading, 
      error, 
      searchTodos, 
      completeTodos, 
      deleteTodos,
      openModal,
      setOpenModal
    } = React.useContext(TodoContext)

  return (
    <React.Fragment>
      <TodoTitle />

      <TodoCounter />

      <TodoSearch />
      
      <TodoList> 
        {loading && <TodoLoading />}
        {error && <TodoError />}
        {(!loading && !searchTodos.length) && <SetFirstTodo />}

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

      {!!openModal && (
      <Modal>
        <TodoForm
         setOpenModal={setOpenModal}
        />
      </Modal>)} 
    
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    
    </React.Fragment>
  )
} 

export { AppUI };