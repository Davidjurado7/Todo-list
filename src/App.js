import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoTitle } from "./TodoTitle";
import './App.css';

const defaulTodos = [
  { text: 'Cortar cebolla', completed: false},
  { text: 'Comprar zanahorias', completed: false},
  { text: 'Comprar café', completed: false},
  { text: 'Comprar colacao', completed: false}
]

function App() {
  const [todos, setTodos] = React.useState(defaulTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchTodos = [];

  if (!searchValue >= 1) {
    searchTodos = todos;
  } else {
    searchTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodos = (text) => {
    const todoindex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoindex].completed = !newTodos[todoindex].completed;
    setTodos(newTodos);
  }

  const deleteTodos = (text) => {
    const todoindex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoindex, 1);
    setTodos(newTodos)
  }

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
       
    </React.Fragment>)
}

export default App;
