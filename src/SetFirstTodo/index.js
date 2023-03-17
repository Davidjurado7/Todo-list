import React from "react";
import "./SetFirstTodo.css"

function SetFirstTodo () {
    return [
        <div className="SetFirstTodo">
            <p>¡No tienes nada pendiente!</p>,
            <img src="/Todo.png"></img>,
            <p>Añade tu primera tarea</p>
        </div>
    ]
    
};

export { SetFirstTodo };
