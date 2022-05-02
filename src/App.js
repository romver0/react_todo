import './App.css';
import React from 'react';
import Home from './Components/Home';

import Todo from './Todo';
import Users from './Users';
import Header from './Components/Header';

import{
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello world(Статический элемент)</h1> */}
      <Router>
        <div>
          {/* <nav>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav> */}
          <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="todo/" element={<Todo/>} />
            {/* <Route path="About/" element={<Users/>} /> */}

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;