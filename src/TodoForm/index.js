import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('')

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onCancel = () => {
        setOpenModal(false)
    };

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    
    return [
        <form onSubmit={onSubmit}>
            <label>Añade tu nueva tarea</label>
            <textarea 
                placeholder="Introduce tu tarea" 
                value={newTodoValue}
                onChange={onChange}>
            </textarea>
            <div className="TodoForm-buttonContainer">
                <button onClick={onCancel} type="button" className="TodoForm-button TodoForm-button--cancel">Salir</button>
                <button type="submit" className="TodoForm-button TodoForm-button--add">Añadir</button>
            </div>
        </form>
    ]
}; 

export { TodoForm };