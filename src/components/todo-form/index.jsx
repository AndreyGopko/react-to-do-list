import React from 'react';
import './styles.css';

class TodoForm extends React.Component {
	constructor(props){
		super();
		this.props = props;
		this.id = 0;
	}

	addItem = (e) => {
		e.preventDefault();

		if (this.todoText.value.length === 0) {
			alert('Нельзя добавить пустое поле');
			return;
		}

		this.props.addParentState({
			id: this.id++,
			value: this.todoText.value,
			status: false,
		});

		this.todoText.value = null;

	};

	render() {

		return (
			<div className='form-wrapper'>
				<form className='form'>
					<input
						type='text'
						className='form-todo-text'
						placeholder='Сделать...'
						ref={(node) => (this.todoText = node)}
					/>
					<button className='form-add-btn' onClick={this.addItem}>add</button>
				</form>

			</div>
		)

	};
}

export default TodoForm;