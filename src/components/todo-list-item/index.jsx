import React from 'react';
import './styles.css';

class TodoItem extends React.Component {
	constructor(){
		super();

	}
	deleteListItem = (e, id) => {
		e.preventDefault();
		this.props.deleteItem(id);
	};

	editListItem = (e, id) => {
		e.preventDefault();

		if(e.target.classList.contains('editing')) {
			this.props.editItem(id, this.newTodoContent.value);
		}

		this.toggleNodes();
		this.newTodoContent.focus();
	};

	toggleNodes(){
		this.prevTodoContent.classList.toggle('hide');
		this.newTodoContent.classList.toggle('hide');
	}

	changeItemStatus = (e, id) => {
		this.props.checkItem(id);
	};


	render(){
		let toDoItemClassNameAndHisStatus = 'todo-list-item';
		if(this.props.status) {
			toDoItemClassNameAndHisStatus += ' checked'
		}
		return(
			<li className={toDoItemClassNameAndHisStatus} id={this.props.id}>
				<input type='checkbox' className='todo-status' onClick={(e)=>this.changeItemStatus(e, this.props.id)}/>
				<p className='todo-content' ref={(node) => (this.prevTodoContent = node)}>{this.props.text}</p>
				<input type='text' className='hide new-todo-content' value={this.props.text} ref={(node) => (this.newTodoContent = node)}/>
				<div className='todo-operate-btn'>
					<button
						className='todo-edit todo-btn'
						onClick={(e)=>this.editListItem(e, this.props.id)}
						>EDIT
					</button>
					<button
						className='todo-delete todo-btn'
						onClick={(e)=>this.deleteListItem(e, this.props.id)}
						>DELETE
					</button>
				</div>
			</li>
		)
	}
}


export default TodoItem;