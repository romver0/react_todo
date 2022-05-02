import React from 'react';

const Todo=(props)=>{
    //Events
    const deleteHandler=()=>{
    //    console.log(props.setTodos(element));
        props.setTodos(props.todos.filter(element=>element.id!==props.todo.id));
        console.log(props.todo);
    };
    const completeHandler = () => {
        // console.log(props.todos);
        props.setTodos(props.todos.map((item) => {
            // console.log(item);
            if(item.id===props.todo.id){
                return{
                    ...item,completed: !item.completed
                };
            }
             return item;
        }));
    }
    // const updateHanlder=()=>{
    //     if(!props.todo.text || /^\s*$/.test(todo.text)){
    //         return;
    //     }
    //     props.setTodos(prev=>prev.map(item=>(item.id == props.todo.id)))
    // }
    return(
        <div className="todo">
            <li className={`todo-item ${props.todo.completed ? "completed" :''}`}>{props.text}</li>
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
            {/* <button className="">
                <i className="fa fa-cog"></i>
            </button> */}
            {/* <li className="todo-item">отправить работу своему гуру</li>
            <li className="todo-item">устроиться на работу</li> */}
        </div>
    );
}
export default Todo;