import React from 'react';
import './styles.css';
import TodoHeader from '../todo-header';
import TodoList from '../todo-list';
import TodoForm from '../todo-form';


class TodoBox extends React.Component {
	constructor() {

		super();
		this.state = {
			elements: [],
		}
	};

	addState = (item) => {
		let list = this.state.elements;
		list.push(item);
		this.setState({
			elements: list
		});
	};

	deleteTodoItem = (id) => {
		let list = [...this.state.elements];
		for(let i = 0; i < list.length; i++) {
			if(list[i].id == id) {
				list.splice(i, 1);
			}
		}
		this.setState({elements: list});
	};

	editTodoItem = (id, value) => {
		let list = [...this.state.elements];

		for(let i = 0; i < list.length; i++) {
			if(list[i].id == id) {
				list[i].value = value;
			}
		}
		this.setState({elements: list});
	};

	changeTodoItemStatus = (id) => {
		let list = [...this.state.elements];

		for(let i = 0; i < list.length; i++) {
			if(list[i].id == id) {
				list[i].status = !list[i].status;
			}
		}
		this.setState({elements: list});
	};

	render() {
		console.log(this.state.elements)
		return (
			<div className="todo-box">
				<TodoHeader/>
				<TodoList
					items={this.state.elements}
					deleteItem={this.deleteTodoItem}
					editItem={this.editTodoItem}
					checkItem={this.changeTodoItemStatus}
				/>
				<TodoForm addParentState={this.addState} />
			</div>
		)
	};
}

export default TodoBox;