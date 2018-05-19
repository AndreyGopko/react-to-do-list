import React from 'react';
import ToDoItem from '../to-do-item/index';

function ToDoList(props){
    return(
        <ul className="list-group list-group-flush">
            {props.list.map((elem) => {
                return <ToDoItem
                key={elem.id}
                id={elem.id}
                element={elem}
                removeToDoItem={props.removeToDoItem}
                checkToDoItem={props.checkToDoItem}
            />}
            )}
        </ul>
    )
}

export default ToDoList
