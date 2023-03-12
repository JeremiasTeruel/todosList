import React from "react";
import './NewTodoButton.css'

function NewTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState)
    }
    return(
        <button className="NewTodoButton" onClick={(onClickButton)}>+</button>
    );
}

export { NewTodoButton };