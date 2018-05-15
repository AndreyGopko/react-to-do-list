import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp/'
import todos from './todos'
import './index.css'

const root = document.getElementById('root');

ReactDOM.render(<TodoApp todos = {todos}/>, root);
