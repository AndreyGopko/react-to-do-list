import React, { Component } from 'react';

class Item extends Component {
    constructor() {
        super();

    }
    
    deleteItem(event) {
        let itemRem = event.currentTarget.parentNode;
        itemRem.remove();
    }
    switchCheck(event) {
        let inp = event.currentTarget;
    }
    render() {
        return (
            <li className='list-item' >
                <input type="checkbox" className='list-check' onClick={this.switchCheck.bind(this)} id="listCheck" checked={this.props.isCheck}/>
                <input type="text" className='list-item-text' id="listText" value={this.props.val} disabled />
                <button className='btn editElemList' id='editItem'>Edit</button>
                <button className='btn deleteElemList' id='delItem' onClick={this.deleteItem.bind(this)} >Del</button>
            </li>
        );
    }
}
export default Item;