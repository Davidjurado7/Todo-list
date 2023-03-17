import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(true)
    }
    return(
        <button 
        className="btn-65"
        onClick={onClickButton}
        > Añadir tarea </button>   
    )
}

export { CreateTodoButton };