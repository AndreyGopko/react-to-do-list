import React, { Component } from 'react';
import Header from '../header';
import TodoApp from '../todo-app';

import './styles.css';

export default class AppLayout extends Component {
  render() {
    return (
      <div className='main'>
        <Header />
        <div className='container'>
          <TodoApp />
        </div>
      </div>
    );
  }
}
