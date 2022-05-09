import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";


// import "./styles.css";
import "./style/HomeStyle.css";
import "./style/App.css"; 

function App() {
  return (
    <div className="App">
      {/* <Kanban/> */}
      <Header/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
