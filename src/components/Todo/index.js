import React from 'react'
import './todo.css'
import PropTypes from 'prop-types'

class Todo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            edit: false,
            editedValue: this.props.taskTitle,
        }
    }

    openEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    onEditClick = () => {
        this.setState({
            edit: false,
        })
        this.props.onEdit(this.props.id, this.state.editedValue)
    }

    onChangeInput = (e) => {
        this.setState({
            editedValue: e.target.value
        })
    }

    renderTodo() {
        const {id, done, taskTitle} = this.props
        console.log(id, done, taskTitle);
        return (
            <div className = 'todo'>
                <div className = 'todo-content'>
                    <input onClick = {() => this.props.onCheck(id)} type="checkbox" value={taskTitle} checked = {done} className = 'checkbox'/>
                    <span onClick = {this.openEdit} className = {done ? 'crossed-out' : null}>{taskTitle}</span>
                </div>
                <div className = 'form-group button-panel'>
                    <button onClick = {() =>this.props.onDelete(id)} type = 'button' className = 'todo-button todo-button-danger'>x</button>
                </div>
            </div>
        )
    }

    renderEdit() {
        return <div className='todo'>
            <div className='todo-content'>
                <input type = 'text' value = {this.state.editedValue} onChange = {this.onChangeInput} />
            </div>
            <div className='form-group button-panel'>
                <button  onClick = {this.onEditClick} type='button' className='todo-button todo-button-green'> </button>
            </div>
        </div>

    }

    render() {
        return this.state.edit ? this.renderEdit() : this.renderTodo()
    }
}


Todo.propTypes = {
    id: PropTypes.number,
    done: PropTypes.bool,
    taskTitle: PropTypes.string,
}

export default Todo