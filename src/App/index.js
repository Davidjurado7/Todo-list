import React from "react";
import { AppUI } from "./AppUI";


// const defaulTodos = [
//   { text: 'Cortar cebolla', completed: false},
//   { text: 'Comprar zanahorias', completed: false},
//   { text: 'Comprar café', completed: false},
//   { text: 'Comprar colacao', completed: false}
// ]

function useLocalStorage (itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false)
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const locarStorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
        if (!locarStorageItem) {
          localStorage.setItem(itemName, JSON.stringify([]));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(locarStorageItem);
        }
  
        setItem(parsedItem)
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }, 1000)
  })

  const saveItem = (newTodos) => {
    try {
      const stringifiedTodos = JSON.stringify(newTodos);
      localStorage.setItem(itemName, stringifiedTodos);
      setItem(newTodos)
    } catch (error) {
      setError(error);
    }
  }

  return {
    item,
    saveItem,
    loading,
    error,
  }

}

function App() {
  
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
 
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
    saveTodos(newTodos);
  }

  const deleteTodos = (text) => {
    const todoindex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoindex, 1);
    saveTodos(newTodos)
  }

  return (
    
    <AppUI
      loading={loading}
      error={error}
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
