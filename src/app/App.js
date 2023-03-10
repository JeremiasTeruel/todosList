import React, {useState, useEffect} from 'react'
import { AppUi } from './AppUi';
import { TodoProvider } from '../todoContext/TodoContext';

function App() {

  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
