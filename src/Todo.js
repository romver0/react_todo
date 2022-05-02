import React, { Component } from 'react';
import HeaderTodo from './Components/HeaderTodo';

export default class Todo extends Component {
    render() {
        return (
            <div>
                <nav>
                    <HeaderTodo/>
                </nav>
                <h1>Тут должна быть todo</h1>      
            </div>
        )
    }
}
