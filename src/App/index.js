import React from "react";
import { AppUI } from "./AppUI";


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
    
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos} 
      searchValue={searchValue}
      searchTodos={searchTodos}
      setSearchValue={setSearchValue}
      completeTodos={completeTodos}
      deleteTodos={deleteTodos}
     />
  )
}

export default App;
