import React from 'react';
import './TodoCounter.css';

function TodoCounter ({total, complete}) {
    return (
        <h2 className='TodoCounterH2'>Has completado {complete} de {total} todo's</h2>
    )
}

export { TodoCounter };