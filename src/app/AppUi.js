import React, { useContext } from 'react'
import { TodoContext } from '../todoContext/TodoContext';
import { TodoCounter } from '../todoCounter/TodoCounter';
import { TodoSearch } from '../todoSearch/TodoSearch';
import { TodoList } from '../todoList/TodoList';
import { TodoItem } from '../todoItem/TodoItem';
import { NewTodoButton } from '../newTodoButton/NewTodoButton';
import { Modal } from '../modal/Modal';
import { TodoForm } from '../todoForm/TodoForm';
import './App.css'

function AppUi() {

  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

    return (
      <React.Fragment>
        <TodoCounter />
        <TodoSearch />
            <TodoList>
            {error && <p className='primerTodo-p'>Hubo un error</p>}
            {loading && <p className='primerTodo-p'>Se estan cargando los todo's...</p>}
            {(!loading &&  !searchedTodos.length) && <p className='primerTodo-p'>Crea tu primer todo</p>}
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.complete}
                onComplete={() => completeTodos(todo.text)}
                onDelete={() => deleteTodos(todo.text)}
                />
            ))}
          </TodoList>
              {!!openModal && (
                <Modal>
                  <TodoForm/>
                </Modal>
              )}
        <NewTodoButton 
          setOpenModal={setOpenModal}
        />
      </React.Fragment>
    );
}

export { AppUi };