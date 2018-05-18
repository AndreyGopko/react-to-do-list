import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
          inputValue: this.props.val
        }
      }
    
    render() {
        return (
            <li className='list-item' data-id={this.props.id}>
                <input type="checkbox" checked={this.props.check} className='list-check' id="listCheck" onClick={() => this.props.switchCheck(this.props.id, this.props.isCheck)} />
                <input onChange = {this.onChangeInput} onBlur={() => this.props.editItem(this.state.inputValue)} type="text" className={this.props.check ? 'list-item-text done' : 'list-item-text'} id="listText" value={this.state.val} disabled />
                <button className='btn editElemList' id='editItem' onClick={this.unblockArea.bind(this)} ref={(node) => this.button = node}>Edit</button>
                <button className='btn deleteElemList' id='delItem' data-id={this.props.id} onClick={() => this.props.deleteItem(this.props.id)}>Del</button>
            </li>
        );
    }
}
export default Item;