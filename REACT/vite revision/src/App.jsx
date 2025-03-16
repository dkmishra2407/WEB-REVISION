import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Footer } from './components/Footer';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {
  let initTodos = [];
  if(localStorage.getItem('todos') === null) {
    initTodos = [];
  }
  else {
    initTodos = JSON.parse(localStorage.getItem('todos'));
  }

  const [todos, setTodos] = useState(initTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  , [todos]);

  function Ondelete(id) {
    console.log('I am on delete', id);
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <Header />
      <AddTodo todos={todos} setTodos={setTodos} />
      <Todos list={todos} Ondelete={Ondelete} />
      <Footer />
    </>
  );
}

export default App;
