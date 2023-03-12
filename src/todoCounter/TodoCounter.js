import React, { useContext } from 'react';
import './TodoCounter.css';
import { TodoContext } from '../todoContext/TodoContext'

function TodoCounter () {

    const { totalTodos, completeTodos } = useContext(TodoContext);

    return (
        <>
            <h1 className='TodoCounterH2'>Has completado {completeTodos} de {totalTodos} todo's</h1>
        </>
    )
}

export { TodoCounter };