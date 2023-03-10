import React from "react";
import './NewTodoButton.css'

function NewTodoButton() {
    const onClickButton = (msg) => {
        alert(msg)
    }
    return(
        <button className="NewTodoButton" onClick={() => onClickButton('Modal alerta de click')}>+</button>
    );
}

export { NewTodoButton };