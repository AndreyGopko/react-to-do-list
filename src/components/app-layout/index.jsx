import React, { Component } from 'react';
import Item from './item.jsx';
import './styles.css';
let count = 0;
let res;
class AppLayout extends Component {
  constructor() {
    super();
    this.state = {
      enterData: [],
      tempArr : [],
    }
    
  }
  addDataToItem() {
    let textData = this.input.value;
    this.setState(
      { enterData: this.state.enterData.concat({val:textData, id: Date.now(), isCheck:false})}
    );
    this.input.value = '';
  }



  render() {
    console.log(this.state);
    return (
      <div className='main'>
        <h1 className='global-title'>ToDo List</h1>
        <ul className='list'>
          {this.state.enterData.map(el => <Item key={el.id} val={el.val} check={el.isCheck}/>) }
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
