import React, { Component } from 'react';
import Header from '../header';
import TodoApp from '../todo-app';

import './styles.css';

const initialItems = [
  {id: 0, value: 'Learn ReactJS', done: false},
]

export default class AppLayout extends Component {
  render() {
    return (
      <div className='main'>
        <Header />
        <div className='app-wrapper'>
          <TodoApp initialItems={initialItems} />
        </div>
      </div>
    );
  }
}
