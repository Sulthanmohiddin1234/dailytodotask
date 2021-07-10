import React, { useState, useEffect } from 'react';
import './App.css';

//importing components
import Form from './components/Form';
import Todolist from './components/Todolist';


function App() {
  

 

  //state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  //Run useeffect once

    useEffect(() => {
      getLocalTodos();
    } , [])

  //useEffect
  useEffect (() => {
    filterHandler();
    saveLocalTodos()
  }, [todos, status])
  
  //Function

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
        case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
        default:
        setFilteredTodos(todos);
        break;
    }
  };
  
  //Saving it in local storage

  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
     let todoLocal =  JSON.parse(localStorage.getItem("todos"))
     setTodos(todoLocal)
    }
  }

  return (
    <div className="App">
    <header>
      <h1>Daily Task List</h1>
    </header>
    <Form 
    inputText={inputText} 
    todos={todos} 
    setTodos={setTodos} 
    setInputText={setInputText}
    setStatus={setStatus}
    />
    <Todolist 
    filteredTodos={filteredTodos}
    setTodos={setTodos} 
    todos={todos} />
    </div>
  );
}

export default App;
