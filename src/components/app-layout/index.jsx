import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createStore} from 'redux';
import './styles.css';

class Item extends Component {

    render() {
        return (
            <li className='list-value' data-id={this.props.id}>
                <div className='purchase-text'>
                    <input type='checkbox' className='checkbox' />
                    <span className=''></span>
                    <input type='text' className='hidden' ref={node => this.newInput = node}/>
                </div>
                <div className='purchase-btns'>
                    <div className='btn btn-edit' />
                    <div className='btn btn-rm' />
                </div>
            </li>
        )
    }
}

class Card extends Component {

    addItem = () => {
        if(this.input.value) {
            console.log(this.props);
        }
    };

    rmItem = (id) => {

    };

    editItem = (id, newInput) => {

    };

    render() {
        //let items = this.state.items.map((item, index) => <Item />);
        return (
            <div className='card-place'>
                <div className='card-title'>
                    <span>To-Do-List</span>
                </div>
                <ul className='list-items'>
                    <Item />
                </ul>
                <div className='card-footer'>
                    <div className='card-input-place'>
                        <input className='card-input' ref={node => this.input = node}/>
                        <div className='btn btn-add' onClick={this.addItem}/>
                    </div>
                    <div className='card-progress-bar'>0%</div>
                </div>
            </div>
        )
    }
}

let initialState = {};

let reducer = function(state, action) {

    return state;
};

let store = createStore(reducer, initialState);

const mapStateToProps = function(store) {
    return store;
};

connect(mapStateToProps)(Card);

console.log(store.getState());

class AppLayout extends Component {
  render() {
    return (
      <div className='main'>
        <header className='header'>
          <h1 className='title'>Welcome to React</h1>
        </header>
          <Card />
      </div>
    );
  }
}

export default AppLayout;
