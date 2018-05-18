import React, { Component } from 'react';
import Item from './item.jsx';
import './styles.css';

class AppLayout extends Component {
  constructor() {
    super();
    this.state = {
      enterData: [],
    }
  }
  addDataToItem() {
    let textData = this.input.value;
    this.setState(
      { enterData: this.state.enterData.concat({val:textData, 
                                                id: Date.now(), 
                                                isCheck:false})}
    );
    this.input.value = '';
  }
  deleteItem(id) {
    let temp = this.state.enterData;
    let newTemp = temp.filter(elem => elem.id != id)
    this.setState(
      {enterData: newTemp}
    )
  }
  switchCheck(id, isCheck) {
    let temp = this.state.enterData;
    let newTemp = temp.map(elem => {
      if(elem.id == id) { 
        if(!elem.isCheck) {
          elem.isCheck = true;
        } else {
          elem.isCheck = false;
        }
      }
      return elem;
    })
    this.setState(
      {enterData: newTemp}
    )
  }
  
  render() {
    return (
      <div className='main'>
        <h1 className='global-title'>ToDo List</h1>
        <ul className='list'>
          {this.state.enterData.map
            (el => <Item key={el.id} 
                         val={el.val} 
                         check={el.isCheck} 
                         id={el.id} 
                         deleteItem={this.deleteItem.bind(this)} 
						             switchCheck={this.switchCheck.bind(this)} 
                         />) }
        </ul>
        <div className='input-inner'>
          <input type='text' className='enterData' id='enterDataInp' ref={(node) => this.input = node} />
          <button className='btn input-save' onClick={this.addDataToItem.bind(this)}>Save</button>
        </div>
      </div>
    );
  }
}

export default AppLayout;
