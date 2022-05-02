import React from 'react'; 

const Form=(props)=>{
    // Here I can write js code and function
    const inputTextHandler=(element)=>{
        // console.log(element.target.value);
        props.setInputText(element.target.value);
    };
    const submitTodoHandler=(element)=>{
        element.preventDefault(); //предотравщение перезагрузки
        props.setTodos(
            [...props.todos,{text:props.inputText,completed:false,id:Math.random()*1000}]
            );
            props.setInputText('');
        // console.log('props = ',props)
        // console.log(props.todos);
        // console.log(props.setTodos);

    }
    const statusHandler=(element)=>{
        // console.log('element = ',element.target.value);
        props.setStatus(element.target.value);
        // console.log('props.setStatus = ',props.setStatus);
        
    }
    return(
        <form>
            <input value={props.inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={statusHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;