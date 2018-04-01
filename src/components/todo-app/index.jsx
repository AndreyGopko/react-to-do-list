import React, { Component } from 'react';
import List from '../list';
import AddForm from '../add-form';

import './styles.css';

const initialItems = [];

export default class TodoApp extends Component {
  constructor (props) {
    super(props);
    this.state = {todoItems: initialItems};
  }

  addItem = (value) => {
    const {todoItems} = this.state;
    const id = new Date().valueOf();
    const newTodoItems = todoItems.concat({
      index: id, 
      value, 
      done: false,
    });
    this.setState({todoItems: newTodoItems});
  }

  removeItem = (itemIndex) => {
    const {todoItems} = this.state;
    const newTodoitems = todoItems.filter(item => {
      return item.index !== itemIndex;
    });
    this.setState({todoItems: newTodoitems});
  }

  markTodoDone = (itemIndex) => {
    const {todoItems} = this.state;
    const newTodoItems = todoItems.map(item => {
      if (item.index === itemIndex) {
        return {...item, done: !item.done}; 
      }
      return item;
    })
    
    this.setState({todoItems: newTodoItems});  
  }

  render() {
    return (
      <div id='main'>
        <AddForm addItem={this.addItem} />
        <List items={this.state.todoItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
      </div>
    );
  }
}