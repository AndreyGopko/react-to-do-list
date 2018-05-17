import React, { Component } from 'react';
import Item from './Item';
import {connect} from 'react-redux';
import store from './store';
import './styles.css';

class Card extends Component {

    addItem = () => {
        if (this.input.value) {
            store.dispatch({type: 'ADD_ITEM', value: this.input.value});
            this.input.value = '';
        }
    };

    render() {
        let items = this.props.items.map((item) => <Item key={item.id}
                                                                value={item.value}
                                                                id={item.id}
                                                                done={item.done}
                                                                editing={item.editing} />);
        return (

            <div className='card-place'>
                <div className='card-title'>
                    <span>To-Do-List</span>
                </div>
                <ul className='list-items'>
                    {items}
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

const mapStateToProps = function(state) {
    return {
        items: state.items
    }
};

export default connect(mapStateToProps)(Card);