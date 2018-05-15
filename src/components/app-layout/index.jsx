import React, { Component } from 'react';
import './styles.css';

// class AddTodo extends Component {

// }

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  onAddRead = (event) => {
    event.target.readOnly = true
  } 

  onDeleteRead(event) {
    event.target.readOnly = false;
  }

  render() {
    return (
      <li data-id={this.props.id} className={this.props.classElement ? this.props.classElement: ''}>
        <input onClick={this.props.checkedItem} type="checkbox" />
        <input 
          readOnly
          onDoubleClick={this.onDeleteRead}
          onBlur={this.onAddRead} 
          value={this.props.value} 
          onChange={this.props.editElement} 
        />
        <button onClick={this.props.removeElement} >remove</button>
      </li>
    )
  }
}

class NewTodo extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      name: ''
    }
  }
  handleSubmit = (event) => {
    this.props.updateData(this.state.value)
    event.preventDefault();
  }
  handleChange = (event) => {
    this.setState({value: event.target.value})
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="todo__form">
        <input 
          onChange={this.handleChange} 
          value={this.state.value} 
          className="todo__input" 
          type="text"
        />
        <button className="button button-add" type="submit">add todo</button>
      </form>
    )
  }
}
class AppLayout extends Component {
  constructor() {
    super() 
    this.state = {
      arr: [],
    };
  }

  onRemoveElement = (event) => {
    const newArr = this.state.arr.filter((e, i) => {
      return e.id !== +event.target.parentElement.dataset.id
    })
    this.setState({arr: newArr})
  } 

  onEditElement = (event) => {
    const arr = this.state.arr;
    arr.map((e) => {
      if (e.id === +event.target.parentElement.dataset.id) {
        e.value = event.target.value
      }
      return e
    })
    this.setState({arr})
  }

  onCheckedItem = (event) => {
    const arr = this.state.arr.map((e) => {
      if (e.id === +event.target.parentElement.dataset.id) {
        e.check = event.target.checked
      }
      return e
    })
    this.setState({add: arr})
    console.log(this.state.arr)

  }
  render() {
    return (
      <section className="todo">
        <NewTodo updateData={this.updateData} />
        <ul>
          {this.state.arr.map((element,id) => {
             return (
              <AddTodo
                classElement={element.check === true && 'checked'}
                key={id}
                readChange={this.onChangeRead}
                checkedItem={this.onCheckedItem} 
                id={this.state.arr[id].id} 
                removeElement={this.onRemoveElement} 
                editElement={this.onEditElement}
                value={this.state.arr[id].value}
              />
             )
          })}
        </ul>
      </section>
    );
  }
  updateData = (value) => {
    this.state.arr.push({value: value, id: Math.random(), check: false})
    this.setState({name: value})
  }
}
export default AppLayout;
