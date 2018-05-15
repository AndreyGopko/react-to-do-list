import React from 'react' 
import TodoList from '../TodoList' 
import PropTypes from 'prop-types'
import './todoApp.css'
import {getTodoById} from '../../utils'


class TodoApp extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            todos: this.props.todos,
        }
    }

    onCheck = (id) => {
        const {todos} = this.state 
        const item = getTodoById(this.state.todos, id)
        const index = todos.indexOf(item) 
        item.done = !item.done 
        const updatedTodos = todos.slice(0, index).concat(item, todos.slice(index + 1, todos.length)) 
        this.setState(updatedTodos) 
    } 

    onDelete = (id) => {
        const updatedTodos = this.state.todos.filter((item) => item.id !== id) 
        this.setState({todos: updatedTodos}) 
    } 

    onSubmit =  (e) => {
        e.preventDefault() 
        if(this.input.value.trim() === ''){
            return false 
        }
        this.setState({
            todos: this.state.todos.concat({
                taskTitle: this.input.value.trim(),
                id: Math.round(Math.random() * 10000),
                done: false
            })
        })
    } 

    onEdit = (id, editedTitle) => {
        const todos = this.state.todos 
        const item = this.getTodoById(id) 
        const index = todos.indexOf(item) 
        item.taskTitle = editedTitle 
        const updatedTodos = todos.slice(0, index).concat(item, todos.slice(index + 1, todos.length)) 
        this.setState(updatedTodos) 
    }


    render() {
        console.log(this.state.todos) 
        return (
            <div className = 'todo-app'>
                <form  onSubmit = {this.onSubmit}>
                    <div className = 'input-group'>
                        <input className = 'form-control' ref = {(node) => this.input = node}  type = 'text' name = 'text' />
                        <span className = 'input-group-btn'>
                            <button className = 'btn btn-primary' type = 'submit'>Send</button>
                        </span>
                    </div>
                </form>
                <TodoList onEdit = {this.onEdit} onDelete = {this.onDelete} onCheck = {this.onCheck} todos = {this.state.todos} />
            </div>
            )
    }
}

TodoApp.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        done: PropTypes.bool.isRequired,
        taskTitle: PropTypes.string
    }))
} 

export default TodoApp 