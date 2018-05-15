import React, { Component } from 'react';
import './style.css';
class Todo extends Component {
    constructor(){
        super();
        this.state = {
            edit: false,
        };
    };
    onEdit =() => {
        this.setState ({edit: true});

    }
    onSave = () => {
        const value = this.refs.value.value;
        this.props.editerTodo(value, this.props.index);
        this.setState ({edit: false})
    };
    onRemove =() =>  {
        this.props.deleteTodo(this.props.index);
    }

    onChangeChk = () => {
        this.props.isChecked(this.props.index);
    }
    renderEditer = () => {
        return (
            <div className="edit-form">
                <textarea className="edit-text" ref="value" defaultValue={this.props.item}></textarea>
                <button className="button" onClick={this.onSave}>Save</button>
            </div>
        );
    };

    renderTodo = () => {
        return (
            <div className="todo-item">
                 <input id="checkBox" type="checkbox" onChange={this.onChangeChk}/>
                <p className="text-Todo">{this.props.item}</p>
                <button className="btn-grey" onClick={this.onEdit}>Edit</button>
                <button className="btn-red" onClick={this.onRemove}>Remove</button>
            </div>);
    };
    render() {
        return (this.state.edit) ? this.renderEditer() : this.renderTodo();
    };
}
export default Todo;