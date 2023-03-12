import React, { useState } from 'react'
import { useLocalStorage } from './UseLocalStorage';

const TodoContext = React.createContext()

function TodoProvider (props) {
      const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', [])
  
  const [search, setSearch] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const completedTodos = todos.filter(todo => !!todo.complete).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!search.length >= 1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = search.toLowerCase();
      return todoText.includes(searchText)
    })
  }



  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].complete = true;
    saveTodos(newTodos);
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      complete: false,
      text,
    });
    saveTodos(newTodos);
  }

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
  }
    return (
        <TodoContext.Provider value={{error, loading, totalTodos, completedTodos, search, setSearch, searchedTodos, completeTodos, deleteTodos, addTodo, openModal, setOpenModal}}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }