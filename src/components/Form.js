import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';




 const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
   //Writing javascript fns

    const inputTextHandler = (e) => {
      //console.log(e.target.value);
      setInputText(e.target.value)
    };

    // const  notify =() => {
    //   toast.dark("Hey please add your todo task");
    // }

    const submitTodoHandler = (e) => {
      e.preventDefault();
      if (inputText === "") {
        return alert("please fill some value")
    }
      setTodos([
        ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
      ]);
      setInputText("");
    }
    
    const statusHandler = (e) => {
      setStatus(e.target.value)
    }

    return (
        <form>
      <input value={inputText} 
      onChange={inputTextHandler} 
      type="text" 
      className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    )
}

export default Form;