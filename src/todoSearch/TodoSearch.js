import React, { useContext } from "react";
import './TodoSearch.css'
import { TodoContext } from "../todoContext/TodoContext";

function TodoSearch () {

    const {search, setSearch} = useContext(TodoContext);

    const onChangeValue = (event) => {
        // console.log(event.target.value)
        setSearch(event.target.value);
    }
    return(
        <div className="inputContainer">
            <input className="TodoSearchInput" placeholder="Buscar todo's" value={search} onChange={onChangeValue} />
        </div>
    )
}

export { TodoSearch };