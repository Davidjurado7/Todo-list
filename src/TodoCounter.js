import React from "react";
import './todoCounter.css';

function TodoCounter( {completedTodos, totalTodos} ) {
    return (
        <h2 className="todoCounter">Has completado {completedTodos} de {totalTodos} tareas</h2>
    );
}

export { TodoCounter };