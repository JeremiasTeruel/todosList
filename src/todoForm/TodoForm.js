import React, { useContext, useState } from 'react'
import { TodoContext } from '../todoContext/TodoContext';
import './TodoForm.css';

const TodoForm = () => {

    const [newTodoValue, setNewTodoValue] = useState('');

    const {
        addTodo,
        setOpenModal,
    } = useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false)
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea value={newTodoValue} onChange={onChange} placeholder='Crear nuevo Todo' />
            <div className='TodoForm-buttonContainer'>
                <button type='button' onClick={onCancel} className='TodoForm-button TodoForm-button--cancel'>
                    Cancelar
                </button>
                <button type='submit' className='TodoForm-button TodoForm-button--add'>
                    Agregar Todo
                </button>
            </div>
        </form>
    )
}

export { TodoForm };