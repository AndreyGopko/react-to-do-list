import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import './styles.css';

class Item extends Component {

    render() {

        return (
            <li className='list-value' data-id={this.props.id}>
                <div className='purchase-text'>
                    <input type='checkbox' className='checkbox' />
                    <span className=''>{this.props.value}</span>
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
        if (this.input.value) {
            store.dispatch({type: 'ADD_ITEM', value: this.input.value});
            console.log(store.getState());
            console.log(this.props);
        }
    };

    rmItem = (id) => {

    };

    editItem = (id, newInput) => {

    };

    render() {

        //let items = this.props.items.map((item, index) => <Item value={item.value}/>);
        console.log(this.props);
            return (

                <div className='card-place'>
                    <div className='card-title'>
                        <span>To-Do-List</span>
                    </div>
                    <ul className='list-items'>
                        items
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


let reducer = (state, action) => {
    let updatedItems = state.items.concat({id: 1, value: action.value, done: false});
    return { ...state, items: updatedItems };
};

let store = createStore(reducer, {items: []});
const mapStateToProps = function(state) {
    return {
        items: state.items
    }
};

let Test = connect(mapStateToProps)(Card);

class Test2 extends React.Component {

    render(){
        return (<Test />);
    }
}

class AppLayout extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className='main'>
                    <header className='header'>
                        <h1 className='title'>Welcome to React</h1>
                    </header>
                    <Test2 />
                </div>
            </Provider>
        );
    }
}

export default AppLayout;
