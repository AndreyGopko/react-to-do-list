import React, { Component } from 'react';
import store from './store';
import './styles.css';

class Item extends Component {

    rmItem = () => {
        store.dispatch({type: 'RM_ITEM', id: this.props.id});
    };

    itemDone = () => {
        store.dispatch({type: 'DONE_ITEM', id: this.props.id});
    };

    editItem = () => {
        store.dispatch({type: 'EDIT_ITEM', id: this.props.id, value: this.newInput.value});
    };

    render() {

        return (
            <li className='list-value' data-id={this.props.id}>
                <div className='purchase-text'>
                    <input type='checkbox' className='checkbox' onChange={this.itemDone}/>
                    <span className={ this.props.done ? 'done' : this.props.editing ? 'hidden' : ''}>{this.props.value}</span>
                    <input type='text' className={ this.props.editing ? '' : 'hidden'} ref={node => this.newInput = node} defaultValue={this.props.value}/>
                </div>
                <div className='purchase-btns'>
                    <div className='btn btn-edit' onClick={this.props.done ? f => f : this.editItem}/>
                    <div className='btn btn-rm' onClick={this.rmItem}/>
                </div>
            </li>
        )
    }
}

export default Item;