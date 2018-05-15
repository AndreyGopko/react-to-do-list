import React, { Fragment } from "react";

const TodoItem = ({data,changeProps,deleteFunc}) => {

    let {id,value,done} = data;
    let change = e => {
        changeProps(data.id);
    }
    let del = e => {
        e.preventDefault();
        deleteFunc(id)
    }

    return (
        <Fragment>
            <li className="todo-item" >
                <span
                    className="todo-id"
                    children={ id } 
                />
                <p 
                    className="item-context" 
                    children={ value }
                    className = { done ? "checked" : "no-checked" }
                />
                <input 
                    className="todo-check" 
                    type="checkbox" 
                    onClick={change} 
                />
                <span 
                    className="todo-del" 
                    children="DEL" 
                    onClick={del} 
                />
            </li>
        </Fragment>
    )
}

export default TodoItem;