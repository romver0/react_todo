import React from 'react';
// Import Components
import Todo from './Todo';


const TodoList=(props)=>{
    // console.log(props.todos)
    // console.log('props.todos = ',props.todos);
    // console.log('props.filteredTodos = ',props.filteredTodos);
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {props.filteredTodos.map(todo=>(
                    <Todo
                     setTodos={props.setTodos}
                     todos={props.todos}
                     todo={todo}
                     text={todo.text}
                     key={todo.id}
                     />
                ))}
            </ul>
        </div>
    )
}

export default TodoList;