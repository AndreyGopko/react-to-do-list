import React, { Component } from 'react';
import './styles.css';
import TodoBox from '../todo-box';

class AppLayout extends Component {
  render() {
    return (
      <div className='main'>
        <header className='header'>
          <h1 className='title'>Welcome to React</h1>
        </header>
        <div className='container'>
          <TodoBox />
        </div>
      </div>
    );
  }
}

export default AppLayout;
