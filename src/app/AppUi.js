import React from 'react'
import { TodoContext } from '../todoContext/TodoContext';
import { TodoCounter } from '../todoCounter/TodoCounter';
import { TodoSearch } from '../todoSearch/TodoSearch';
import { TodoList } from '../todoList/TodoList';
import { TodoItem } from '../todoItem/TodoItem';
import { NewTodoButton } from '../newTodoButton/NewTodoButton';

function AppUi() {
    return (
        <React.Fragment>
        <TodoCounter />
        <TodoSearch />
        <TodoContext.Consumer>
          {({
          error,
          loading,
          searchedTodos,
          completeTodos,
          deleteTodos
        }) => (
            <TodoList>
            {error && <p>hubo un error</p>}
            {loading && <p>se estan cargando los todo's</p>}
            {(!loading &&  !searchedTodos.length) && <p>crea tu primer todo</p>}
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
          )}
        </TodoContext.Consumer>
        <NewTodoButton />
      </React.Fragment>
    );
}

export { AppUi };