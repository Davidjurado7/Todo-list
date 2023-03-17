import React from "react";
import './TodoItem.css';
import { MdDeleteForever } from "react-icons/md";
import { BiBadgeCheck } from "react-icons/bi";


function TodoItem(props) {

    return(
        <li className="TodoItem ">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >    
                <BiBadgeCheck size={"1.5em"}/>
            </span>
            <p
                className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
            > 
                {props.text} 
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                <MdDeleteForever size={"1.2em"}/>
            </span>
        </li>
    );
}

export { TodoItem };