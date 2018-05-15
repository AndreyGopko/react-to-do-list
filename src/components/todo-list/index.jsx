import React from 'react';
import './styles.css';
import TodoItem from '../todo-list-item';


function TodoList(props) {
	return (
		<ul className='todo-list'>
			{props.items.map((item,index) => {
				return <TodoItem
					id={item.id}
					text={item.value}
					key={item.id}
					status={item.status}
					deleteItem={props.deleteItem}
					editItem={props.editItem}
					checkItem={props.checkItem}
				/>
			})}
		</ul>
	)
}

export default TodoList;