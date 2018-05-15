import React from 'react' 
import Todo from '../Todo/' 
import './TodoList.css'
import PropTypes from "prop-types";


class TodoList extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            idOpen: true,
        }
    } 

    onOpen = (e) => {
        e.preventDefault() 
        this.setState({isOpen: !this.state.isOpen}) 
    } 

    render() {
        const {todos} = this.props 
        return (
            <div className='app'>
                <a onClick = {this.onOpen} href = '/' className = 'open-list dropdown-toggle'>list</a>

                {this.state.isOpen && (<ul className = 'todo-list'>
                    { todos.map((todo) => {
                        let {id, done, taskTitle} = todo 
                        return <li key = {id}><Todo onEdit = {this.props.onEdit} onDelete = {this.props.onDelete} onCheck = {this.props.onCheck} id = {id} done = {done} taskTitle = {taskTitle} /></li>
                    })}
                </ul>)}
                </div>
        ) 
    } 
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        done: PropTypes.bool.isRequired,
        taskTitle: PropTypes.string
    }))
}

export default  TodoList 