import React, { Component } from 'react';

class ToDoItem extends Component{
    constructor(){
        super()
    }

    render(){
        const removeBtn = <span className="icon" onClick={() => this.props.removeToDoItem(this.props.id)}><i className="fas fa-trash"></i></span>;
        const checkbox = <input type="checkbox" onChange={() => this.props.checkToDoItem(this.props.id)}/>;
        let liClass = "list-group-item d-flex justify-content-between align-items-center"
        if (this.props.element.checked){
            liClass += ` checked`
        }
        return(
            <li className={liClass}>
                {checkbox}<span className="content-text">{this.props.element.text}</span>{removeBtn}
            </li>)
    }
}

export default ToDoItem
