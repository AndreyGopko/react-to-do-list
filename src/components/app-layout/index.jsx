import React, { Component } from 'react';
import TodoComponent from './todoComponent'
import FormComponent from './formConponen'
import PropTypes from 'prop-types'; 
import { getLocalStorage, setLocalStorage, changeState } from "../../helper.js"
import './styles.css';

export default class TodoContainer extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
  }
  
  componentDidMount(){
    const todos = getLocalStorage()
     this.setState({ todos })
  }
  
  handelSubmit = (e) => {
    e.preventDefault();
    if(this.inputComponent.value){
         this.setState({
      todos: [
        ...this.state.todos,
        { 
          date: Date.now(),
          value: this.inputComponent.value,
          flag: false,
          readonly: false
        }
      ]
    }, () => setLocalStorage(this.state.todos))
    this.inputComponent.value = ""
    }
  }
  
  handelDeleteClick = (id) => {
    const updatedTodos = this.state.todos.filter((el, index) => index != id)
    this.setState({ todos: updatedTodos }, () => setLocalStorage(updatedTodos))
  }
  
  
  handelDoneClick = (id) => {
    const updatedTodos = changeState("flag", id, this.state.todos)
    this.setState({ todos: updatedTodos }, () => setLocalStorage(updatedTodos))
  }
  
  handelUpdateClick = (id) => {
    const updatedTodos = changeState("readonly", id, this.state.todos)
    this.setState({ todos: updatedTodos }, () => setLocalStorage(updatedTodos))
  }

  handelInput = (e, id) => {
    const updatedTodos = this.state.todos.map((el, index) => {
      if(index == id){
        return el = Object.assign(el, {value: e.target.value})
      } else {
        return el
      }
    })
    this.setState({ todos: updatedTodos }, () => setLocalStorage(updatedTodos))
  }
  
  render(){ 
    const { todos, flag } = this.state
    return (
      <div className="wrapper">
      <div className="title" >TO - DO LIST</div>
      <FormComponent handelSubmit={this.handelSubmit} inputRef={input => this.inputComponent = input} />
                <div id="output">{
                  todos.map((el, index) => <TodoComponent key={index} index={index} el={el}
                  handelDeleteClick={this.handelDeleteClick} 
                        handelDoneClick={this.handelDoneClick}
                        handelUpdateClick={this.handelUpdateClick}
                        handelInput={this.handelInput}
                        />)}</div>       
      </div>
    )
  }
}



