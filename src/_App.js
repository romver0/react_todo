import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import { element } from 'prop-types';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
const App=()=>{
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  
  const [emailDirty,setEmailDirty]=useState(false);
  const [passwordDirty,setPasswordDirty]=useState(false);

  const [emailError,setEmailError]=useState("Емейл не может быть пустым!");
  const [passwordError,setPasswordError]=useState("Пароль не может быть пустым!");


  const emailHandler=(element)=>{
    setEmail(element.target.value);
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(element.target.value).toLowerCase())){
      setEmailError('Неккоретный email');
    }else{
      setEmailError("");
    }
  }
  const passwordHandler=(element)=>{
    setPassword(element.target.value)
  }
  
  const blurHandler = (element)=>{
    switch(element.target.name){
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
        
    }
  }
  return (
    <div className="app">
      <form>
        <h1>Регистрация</h1>
        {(emailDirty && emailError) && <div style={{color:'red'}}> {emailError}</div>}
        <input onChange={element=>emailHandler(element)} value={email} onBlur={element=>blurHandler(element)} name="email" type="text" placeholder="Enter your email..."></input>
        <p></p>
        {(passwordDirty && passwordError) && <div style={{color:'red'}}> {passwordError}</div>}
        <p></p>
        <input onChange={element=>passwordHandler(element)} value={password} onBlur={element=>blurHandler(element)} name="password" type="password" placeholder="Enter your password..."></input>
        <p></p>
        <button type="submit">Registration</button>
      </form>
    </div>
  );
};

export default App;
