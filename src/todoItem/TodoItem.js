import React from "react";
import './TodoItem.css'
import { AiOutlineCheck } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'

function TodoItem (props){
    return(
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={props.onComplete}><AiOutlineCheck/></span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span className="Icon Icon-delete" onClick={props.onDelete}><RxCross1/></span>
        </li>
    );
}

export { TodoItem };