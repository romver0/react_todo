import React,{useState,useEffect} from 'react';
import './App.css';

//Importing components
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
  //state stuff
  const [inputText,setInputText]=useState('');
  const [todos,setTodos]=useState([]);
  const[status,setStatus]=useState('all');
  const[filteredTodos,setFilteredTodos]=useState([]);
  // const {editText,setEditText}=useState('');

  //Run once when the app start
useEffect(()=>{
  getLocalTodos();
},[]);
 //useEffect
 useEffect(()=>{
  // console.log('hey');
  filterHandler();
  saveLocalTodos();
  
},[todos,status]);

  //Functions
  const filterHandler=()=>{
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo=>todo.completed===true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo=>todo.completed===false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //Save to local
  const saveLocalTodos=()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  };
  const getLocalTodos=()=>{
    if(localStorage.getItem("todos")===null){
      localStorage.setItem("todos",JSON.stringify([]));
    }
    else{
      // let todoLocal=localStorage.getItem('todos',JSON.stringify(todos));
      let todoLocal=JSON.parse(localStorage.getItem("todos"));
      console.log(todoLocal);
      setTodos(todoLocal);
      console.log("setTodos = ",setTodos);
      
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
        {/* {inputText} */}

      </header>
      <Form 
       inputText={inputText}
       setInputText={setInputText}
       todos={todos} 
       setTodos={setTodos}
       setStatus={setStatus}
        />
      <TodoList 
       todos={todos}
       setTodos={setTodos}
       filteredTodos={filteredTodos}
       />
    </div>
  );
}

export default App;
