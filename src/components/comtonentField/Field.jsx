import React, { Component } from 'react';
import Todo from "../componentTodo/Todo";
import './style.css';

class Field extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],

        };
    };
    deleteTodo = (i) => {
        const arr = this.state.todos;
        arr.splice(i, 1);
        this.setState({todos: arr});
    }
    editerTodo = (text,i) => {
        const arr = this.state.todos;
        arr[i].name = text;
        this.setState({todos: arr});
    }

    isChecked = (i) => {
        const arr = this.state.todos;
        this.setState({todos: arr});
    }
    eachTodo = (item, i) => {
        return (
            <Todo key={i} index={i}  editerTodo={this.editerTodo} deleteTodo={this.deleteTodo} item = {item.name}  isChecked={this.isChecked} >
                {item}
            </Todo>
        );
    };
    addTodo = () => {
        const arr = this.state.todos;
        const str = this.input.value.trim();
        str && arr.push({ name: str, checked: false, id: 1});
        this.setState({todos: arr});
        this.input.value = '';

    }
    render() {
        console.log(this.state.todos)
        return (
            <div className="container">
                <div className="wrapper ">
                    <input   className="input" ref = { (node) => this.input = node }  />
                    <button className="button"  onClick={this.addTodo}>newToDO</button>
                </div>

                    {this.state.todos.map(this.eachTodo)}
            </div>
        );
    };
}

export default Field;

