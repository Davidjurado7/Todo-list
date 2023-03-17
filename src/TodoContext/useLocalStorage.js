import React from "react";

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

  export { useLocalStorage }