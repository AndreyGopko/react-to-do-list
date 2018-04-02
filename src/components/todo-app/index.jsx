import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '../list';
import AddForm from '../add-form';

import './styles.css';

export default class TodoApp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      todoItems: props.initialItems || [],
    };
  }

  addItem = (value) => {
    const {todoItems} = this.state;
    const id = new Date().valueOf();
    const newTodoItems = todoItems.concat({
      id, 
      value, 
      done: false,
    });
    this.setState({todoItems: newTodoItems});
  }

  removeItem = (id) => {
    const {todoItems} = this.state;
    const newTodoitems = todoItems.filter(item => {
      return item.id !== id;
    });
    this.setState({todoItems: newTodoitems});
  }

  togleTodoDone = (id) => {
    const {todoItems} = this.state;
    const newTodoItems = todoItems.map(item => {
      if (item.id === id) {
        return {
          ...item,
          done: !item.done,
        }; 
      }
      return item;
    })
    
    this.setState({todoItems: newTodoItems});  
  }

  render() {
    return (
      <div id='content'>
        <AddForm className='add-form-container' addItem={this.addItem} />
        <List
          items={this.state.todoItems}
          removeItem={this.removeItem}
          togleTodoDone={this.togleTodoDone}/>
      </div>
    );
  }
}

TodoApp.propTypes = {
  initialItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ),
}