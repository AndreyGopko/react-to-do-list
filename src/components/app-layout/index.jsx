import React, { Component } from 'react';
import './styles.css';
import Form from "../form";
import Head from "../head";
import List from "../list";

class AppLayout extends Component {
  constructor(){
    super();
    this.state = {
        list: []
    }
    this.addElement = this.addElement.bind(this);
    this.changeFlag = this.changeFlag.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addElement(element){
    let list = this.state.list;
    this.setState({
        list: [...list,element]
    })
  }

  changeFlag(id){
    let list = this.state.list;
    let item = list.find( item => item.id ===id );
    let index = list.indexOf(item);
    this.setState({
      list: [
        ...list.slice(0,index),
        {...list[index],done: !list[index].done},
        ...list.slice(index+1)
      ]
    })
  }

  deleteItem(id){
    let list = this.state.list;
    let item = list.find( item => item.id ===id );
    let index = list.indexOf(item);
    console.log(index);
    console.log("LIST BEFORE", list);
    if(isFinite(index)){
      this.setState({
        list: [
          ...list.slice(0,index),
          ...list.slice(index+1)
        ]
      })
    }
  }

  render() {
    const arr = this.state.list;
    return (
      <div className='wrapper'>
        <Head />
        <Form addFunc={this.addElement}  />
        <List 
          list={arr} 
          changeProps={this.changeFlag} 
          deleteFunc={this.deleteItem}
        />
      </div>
    );
  }
}

export default AppLayout;
