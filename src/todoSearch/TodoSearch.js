import React, { useState } from "react";
import './TodoSearch.css'

function TodoSearch ({search, setSearch}) {
    const onChangeValue = (event) => {
        setSearch(event.target.value);
    }
    return(
        <input 
        className="TodoSearchInput" 
        placeholder="Buscar todo's"
        value={search}
        onChange={onChangeValue}
        />
    )
}

export { TodoSearch };