import React from "react";
import { TodoContext } from "../TodoContext";
import './todoCounter.css';

function TodoCounter() {
    const {
        completedTodos,
        totalTodos,
      } = React.useContext(TodoContext);
    return (
        <h2 className="todoCounter">Has completado {completedTodos} de {totalTodos} tareas</h2>
    );
}

export { TodoCounter };